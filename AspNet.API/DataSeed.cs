using System.Linq;
using AspNet.API.Models;

namespace AspNet.API
{
    public class DataSeed
    {
        private readonly ApiContext _ctx;
        public DataSeed(ApiContext ctx)
        {
            _ctx = ctx;
        }  
        
        public void SeedData(int nCustomers, int nOrders)
        {
            if (!_ctx.Customers.Any()) 
            {
                SeedCustomers(nCustomers);
            }

            if (!_ctx.Orders.Any())
            {
                SeedOrders(nOrders);
            }

            if (!_ctx.Servers.Any())
            {
                SeedServers(nServers);
            }

            _ctx.SaveChanges();
        }

        private void SeedCustomers (int n)
        {
            List<Customer> customers = BuildCustomerList(n);

            foreach (Customer customer in customers) 
            { 
                _ctx.Customers.Add(customer);
            }
        }

        private List<Customer> BuildCustomerList(int nCustomers)
        {
            var customers = new List<Customer>();
            var names = new List<string>();

            for (var i = 1; i <= nCustomers; i++)
            {
                var name = Helpers.MakeUniqueCustomerName(names);
                names.Add(name);

                customers.Add(new Customer
                {
                    Id = i.ToString(),
                    Name = name,
                    Email = Helpers.MakeCustomerEmail(name),
                    State = Helpers.GetRandomState()
                });
            }

            return customers;
        }
    }
}
