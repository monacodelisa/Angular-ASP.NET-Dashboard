
namespace AspNet.API
{
    public class Helpers
    {
        private static Random _rand = new Random();
        private static string GetRandom(IList<string> items)
        {
            return items[_rand.Next(items.Count)];
        }
        internal static string MakeCustomerName()
        {
            var prefix = GetRandom(bizPrefix);
            var suffix = GetRandom(bizSuffix);
            return prefix + suffix;
        }

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
