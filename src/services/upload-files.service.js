import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        let formData = new FormData();
        for(let i = 0; i< file.length; i++) {
            formData.append('images', file[i]);
        }

        return http.post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization":"here authorization info"
            },
            onUploadProgress,
        });
    }
}

export default new UploadFilesService();