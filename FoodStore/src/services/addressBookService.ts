import axios from "axios";

// Lấy URL của Backend từ file .env
const API_URL = process.env.REACT_APP_API_URL;

// Hàm lấy token từ localStorage
const getToken = (): string | null => {
  const token = localStorage.getItem("auth_token");//Token được lưu trữ trong localStorage với key là auth_token
  return token ? token : null; //Hàm này kiểm tra xem token có tồn tại trong localStorage hay không. Nếu có, trả về token; nếu không, trả về null
};

// Hàm lấy tất cả AddressBook theo User ID
export const getAddressBooksByUserId = async (userId: any): Promise<any> => {
  try {
    const response = await axios.get(`${API_URL}/addressbook/user/${userId}`, {     //Gửi yêu cầu GET đến endpoint ${API_URL}/addressbook/user/${userId}
      headers: {
        Authorization: `Bearer ${getToken()}`, // Thêm token vào header
      },
    });
    return response.data.payload; //Nếu yêu cầu thành công, trả về response.data.payload
  } catch (error: any) {
    console.error("Error fetching address books by user ID", error);  //Nếu gặp lỗi (ví dụ: lỗi mạng hoặc server không phản hồi)
    throw error;
  }
};

// Hàm tạo mới AddressBook
export const createAddressBook = async (  //Chuẩn bị dữ liệu địa chỉ (recipientName, phoneNumber, address, email,...) từ các tham số hàm
  userId: any,
  recipientName: string,
  phoneNumber: string,
  address: string,
  ward: string,
  district: string,
  city: string,
  email: string // Thêm trường email
): Promise<any> => {
  try {
    const addressData = {
      recipientName,
      phoneNumber,
      address,
      ward,
      district,
      city,
      email, // Thêm email vào dữ liệu tạo mới
    };

    const response = await axios.post(    //Gửi yêu cầu POST đến endpoint ${API_URL}/addressbook/user/${userId} để tạo mới địa chỉ cho người dùng với dữ liệu đã chuẩn bị.
      `${API_URL}/addressbook/user/${userId}`,
      addressData,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`, // Thêm token vào header và chỉ định kiểu nội dung là JSON
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.payload; //Trả về dữ liệu payload từ API nếu thành công
  } catch (error: any) {
    console.error("Error creating address book", error);
    throw error;
  }
};

// Hàm cập nhật AddressBook theo ID
export const updateAddressBook = async (  //Chuẩn bị dữ liệu cần cập nhật (tên người nhận, số điện thoại, địa chỉ, email,...
  addressBookId: any,
  recipientName: string,
  phoneNumber: string,
  address: string,
  ward: string,
  district: string,
  city: string,
  email: string // Thêm trường email
): Promise<any> => {
  try {
    const addressData = {
      recipientName,
      phoneNumber,
      address,
      ward,
      district,
      city,
      email, // Thêm email vào dữ liệu cập nhật
    };

    const response = await axios.put( //Gửi yêu cầu PUT đến endpoint ${API_URL}/addressbook/${addressBookId} để cập nhật địa chỉ với ID đã cho.
      `${API_URL}/addressbook/${addressBookId}`,
      addressData,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`, // Thêm token vào header và định dạng dữ liệu là JSON
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.payload; //Nếu thành công, trả về response.data.payload chứa thông tin địa chỉ đã cập nhật
  } catch (error: any) {
    console.error("Error updating address book", error);
    throw error;
  }
};

// Gửi yêu cầu DELETE đến endpoint ${API_URL}/addressbook/${addressBookId} để xóa địa chỉ theo addressBookId
export const deleteAddressBook = async (addressBookId: any): Promise<any> => {
  try {
    const response = await axios.delete(
      `${API_URL}/addressbook/${addressBookId}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`, // Thêm token vào header để xác minh quyền xóa
        },
      }
    );

    return response.data.payload; //Trả về response.data.payload nếu thành công
  } catch (error: any) {
    console.error("Error deleting address book", error);
    throw error;
  }
};

// API URL cho Tỉnh, Quận, Phường
const PROVINCE_API_URL = "https://provinces.open-api.vn/api/p/"; //Gửi yêu cầu GET đến URL https://provinces.open-api.vn/api/p/ để lấy thông tin các tỉnh

export const fetchProvinces = async () => {
  try {
    const response = await axios.get(PROVINCE_API_URL);//Trả về dữ liệu tỉnh nếu thành công 
    return response.data;
  } catch (error) {
    console.error("Error fetching provinces", error); //ném lỗi nếu không thể lấy dữ liệu
    throw error;
  }
};

export const fetchDistrictsByProvince = async (provinceCode: string) => {
  try {
    const response = await axios.get( //Gửi yêu cầu GET đến endpoint ${PROVINCE_API_URL}${provinceCode}?depth=2 để lấy các quận thuộc tỉnh đó.
      `${PROVINCE_API_URL}${provinceCode}?depth=2`
    );
    return response.data.districts; //Trả về danh sách quận nếu thành công
  } catch (error) {
    console.error("Error fetching districts", error); // hoặc ném lỗi nếu không lấy được dữ liệu
    throw error;
  }
};
// Gửi yêu cầu GET đến endpoint https://provinces.open-api.vn/api/d/${districtCode}?depth=2 để lấy các phường trong quận đó
export const fetchWardsByDistrict = async (districtCode: string) => {
  try {
    const response = await axios.get(
      `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
    );
    return response.data.wards; //Trả về danh sách phường nếu thành công
  } catch (error) {
    console.error("Error fetching wards", error); //ném lỗi nếu không lấy được dữ liệu
    throw error;
  }
};
