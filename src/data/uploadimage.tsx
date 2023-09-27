import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = async () => {
    if (!file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `assets/img/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(storageRef);
      console.log("Tải lên thành công! URL:", imageUrl);
    } catch (error) {
      console.error("Lỗi khi tải lên:", error);
    }
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileInputChange} />
      <button onClick={handleFileUpload}>Tải lên ảnh</button>
    </div>
  );
};

export default UploadImage;
