using System.IO;

namespace Server.BLL.Interfaces
{
    public interface IImageService
    {
        string Upload(Stream content);
    }
}
