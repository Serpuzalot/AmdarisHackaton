namespace AmdarisHelper.Dal
{
    public class BaseEntity : IBaseEntity<Guid>
    {
        public Guid Id { get; set; }
    }
}
