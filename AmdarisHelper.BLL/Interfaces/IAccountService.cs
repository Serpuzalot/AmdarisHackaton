using AmdarisHelper.Common.Dtos.User;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmdarisHelper.BLL.Interfaces
{
    public interface IAccountService
    {
        Task<IdentityResult> AddNewUser(UserForRegistrationDto userForRegistration);
    }
}
