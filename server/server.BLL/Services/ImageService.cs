using System;
using System.IO;
using Server.BLL.Interfaces;
using  CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace Server.BLL.Services
{
    public class ImageService : IImageService
    {
        CloudinaryDotNet.Cloudinary _cloudinary;
        public ImageService(string userName, string password, string secret)
        {
            var account = new Account(userName, password, secret);
            _cloudinary = new CloudinaryDotNet.Cloudinary(account);

        }
        public string Upload(Stream content)
        {
            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription("userImage", content)
            };
            var uploadResult = _cloudinary.Upload(uploadParams);
            if (uploadResult.Error != null)
            {
                throw new Exception("error");
            }
            return uploadResult.Uri.AbsoluteUri;
        }
    }
}
