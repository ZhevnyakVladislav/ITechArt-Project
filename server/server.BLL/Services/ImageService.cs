using System.IO;
using Server.BLL.Interfaces;
using  CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace Server.BLL.Services
{
    public class ImageService : IImageService
    {
        private CloudinaryDotNet.Cloudinary _cloudinary;
        public ImageService()
        {
            Account account = new Account(
                "luxorik",
                "531764713868471",
                "lGDzTO16-xZsb1F1Vryfjam-R0M");
            _cloudinary = new CloudinaryDotNet.Cloudinary(account);

        }
        public string Upload(Stream content)
        {
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription("userImage", content)
            };
            var uploadResult = _cloudinary.Upload(uploadParams);
            return "asd";
        }
    }
}
