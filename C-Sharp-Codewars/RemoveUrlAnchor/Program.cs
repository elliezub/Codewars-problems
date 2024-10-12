string RemoveUrlAnchor(string url)
{
    // Split the URL at the '#' character
    string[] split = url.Split('#');

    // Return the first part of the split array, which is the URL without the anchor
    return split[0];
}

Console.WriteLine(RemoveUrlAnchor("www.meowmeowmewo.com/cheese#fjoandoas"));

