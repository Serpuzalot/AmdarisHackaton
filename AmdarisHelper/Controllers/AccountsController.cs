using AmdarisHelper.BLL.Interfaces;
using AmdarisHelper.Common.Dtos.User;
using AmdarisHelper.Domain;
using AmdarisHelper.Domain.Entities;
using AmdarisHelper.JwtFeatures;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace AmdarisHelper.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly IAccountService _userService;
        private readonly JwtHandler _jwtHandler;
        public AccountsController(UserManager<User> userManager, JwtHandler jwtHandler, IAccountService userService)
        {
            _userService = userService;
            _userManager = userManager;
            _jwtHandler = jwtHandler;
        }
        [HttpPost("Registration")]
        public async Task<IActionResult> RegisterUser([FromBody] UserForRegistrationDto userForRegistration)
        {
            if (userForRegistration == null || !ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!userForRegistration.Email.EndsWith("@amdaris.com"))
            {
                return this.Forbid();
            }

            var result = await _userService.AddNewUser(userForRegistration);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseDto { Errors = errors });
            }

            return StatusCode(201);
        }
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] UserForAuthenticationDto userForAuthentication)
        {
            var user = await _userManager.FindByNameAsync(userForAuthentication.Email);
            if (user == null || !await _userManager.CheckPasswordAsync(user, userForAuthentication.Password))
            {
                return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid Authentication" });
            }
            var token = await _jwtHandler.GenereateTokenForUser(user);
            return Ok(new AuthResponseDto { IsAuthSuccessful = true, Token = token });
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<UserInfoDto>> getUserInfo(string userId)
        {
            User user = await _userManager.FindByIdAsync(userId);
            UserInfoDto userDto = new UserInfoDto() { UserName = user.UserName };
            return Ok(userDto);
        }
    }
}
