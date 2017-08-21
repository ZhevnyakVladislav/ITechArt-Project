﻿using Microsoft.AspNet.Identity.EntityFramework;

namespace Server.DAL.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ClientProfile ClientProfile { get; set; }
    }
}
