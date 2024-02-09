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
                SeedServers();
            }

            _ctx.SaveChanges();
        }

        private void SeedCustomers(int n)
        {
            List<Customer> customers = BuildCustomerList(n);

            foreach (Customer customer in customers)
            {
                _ctx.Customers.Add(customer);
            }
        }

        private void SeedOrders(int n)
        {
            List<Order> orders = BuildOrderList(n);

            foreach (Order order in orders)
            {
                _ctx.Orders.Add(order);
            }
        }

        private void SeedServers()
        {
            List<Server> servers = BuildServerList();

            foreach (var server in servers)
            {
                _ctx.Servers.Add(server);
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
                    Id = i,
                    Name = name,
                    Email = Helpers.MakeCustomerEmail(name),
                    State = Helpers.GetRandomState()
                });
            }

            return customers;
        }

        private List<Order> BuildOrderList(int nOrders)
        {
            var orders = new List<Order>();
            var rand = new Random();

            for (var i = 1; i <= nOrders; i++)
            {
                var randomCustomerId = rand.Next(_ctx.Customers.Count());
                var placed = Helpers.GetRandomOrderPlaced();
                var completed = Helpers.GetRandomOrderCompleted(placed);

                orders.Add(new Order
                {
                    Id = i,
                    Customer = _ctx.Customers.First(c => c.Id == randomCustomerId),
                    Total = Helpers.GetRandomOrderTotal(),
                    Placed = placed,
                    Completed = completed
                });
            }

            return orders;
        }

        private List<Server> BuildServerList()
        {
            return new List<Server>()
            {
                new Server { Id = 1, Name = "Dev-Web", IsOnline = true },
                new Server { Id = 2, Name = "Test-DB", IsOnline = true },
                new Server { Id = 3, Name = "Prod-App", IsOnline = false },
                new Server { Id = 4, Name = "Staging-Web", IsOnline = true },
                new Server { Id = 5, Name = "Backup-DB", IsOnline = false },
                new Server { Id = 6, Name = "QA-App", IsOnline = true },
                new Server { Id = 7, Name = "Demo-Web", IsOnline = false },
                new Server { Id = 8, Name = "Backup-App", IsOnline = true },
                new Server { Id = 9, Name = "Dev-DB", IsOnline = false }

            };
        }
    }
}
