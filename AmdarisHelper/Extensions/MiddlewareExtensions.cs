using AmdarisHelper.Middlewares;

namespace AmdarisHelper.Extensions
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseDbTransaction(this IApplicationBuilder app) =>
            app.UseMiddleware<DbTransactionMiddleware>();
    }
}
