﻿namespace AmdarisHelper.Dal
{
    public interface IBaseEntity<T>
    {
        T Id { get; set; }
    }
}
