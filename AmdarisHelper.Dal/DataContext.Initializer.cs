using AmdarisHelper.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmdarisHelper.Dal
{
    public partial class DataContext
    {
        public async Task<int> Initialize()
        {
            try
            {
                int updatedRowsCount = 0;
                List<CompleteMigration> completeMigrations = await this.CompleteMigrations.ToListAsync();

                using (var dbContextTransaction = await this.BeginTransactionAsync())
                {
                    try
                    {
                        updatedRowsCount += await this.InitializeDbContext(completeMigrations);
                        dbContextTransaction.Commit();
                        return updatedRowsCount;
                    }
                    catch (Exception ex)
                    {
                        dbContextTransaction.Rollback();
                        throw ex;
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private async Task<int> InitializeDbContext(IList<CompleteMigration> completeMigrations)
        {
            bool toSave = false;
            int numberUpdatedRecords = 0;

            string initMigrationId = "792CA0B5-85B8-4047-8D12-5D83284DC0BC";

            if (!completeMigrations.Any(cm => cm.CompleteMigrationId == initMigrationId))
            {
                // example for put a function
                // toSave |= this.Initialize();

                if (toSave)
                {
                    numberUpdatedRecords = await this.SaveChangesAsync();
                }
            }

            return numberUpdatedRecords;
        }
    }
}
