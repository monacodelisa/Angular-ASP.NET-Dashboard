
namespace AspNet.API
{
    public class Helpers
    {
        private static Random _rand = new Random();
        private static string GetRandom(IList<string> items)
        {
            return items[_rand.Next(items.Count)];
        }
        internal static string MakeUniqueCustomerName(List<string> names)
        {
            var maxNames = bizPrefix.Count * bizPrefix.Count;

            if(names.Count >= maxNames)
            {
                throw new System.InvalidOperationException("Maximum number of unique names exceeded");
            }
            var prefix = GetRandom(bizPrefix);
            var suffix = GetRandom(bizPrefix);
            var bizName = prefix + suffix;

            if (names.Contains(bizName))
            {
                MakeUniqueCustomerName(names);
            }

            return bizName;
        }

        internal static string MakeCustomerEmail(string customerName)
        {
            return $"contact@{customerName.ToLower()}.com";
        }

        internal static string GetRandomState()
        {
            return GetRandom(usStates);
        }

        private static readonly List<string> usStates = new List<string>()
        {
            "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD","MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
        };

        private static readonly List<string> bizPrefix = new List<string>()
        {
            "Nexa",
            "Vista",
            "Quantum",
            "Zenith",
            "Catalyst",
            "Epic",
            "Lumina",
            "Synth",
            "Tru",
            "Inno",
            "Pinnacle",
            "Evoke"
        };

        private static readonly List<string> bizSuffix = new List<string>()
        {
            "Solutions",
            "Dynamics",
            "Hub",
            "Technologies",
            "Sphere",
            "Synergy",
            "Nest",
            "Minds",
            "Forge",
            "Vibe",
            "Quotient",
            "Xperience"
        };

    }
}
