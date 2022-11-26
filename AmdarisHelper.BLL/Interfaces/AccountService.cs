﻿using AmdarisHelper.Common.Dtos.User;
using AmdarisHelper.Domain;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmdarisHelper.BLL.Interfaces
{
    public class AccountService : IAccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public AccountService(UserManager<User> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task<IdentityResult> AddNewUser(UserForRegistrationDto userForRegistration)
        {
            var user = _mapper.Map<User>(userForRegistration);
            var result = await _userManager.CreateAsync(user, userForRegistration.Password);

            if (result.Succeeded)
            {
                await _userManager.AddToRoleAsync(user, "Viewer");
            }
            return result;
        }
    }
}
