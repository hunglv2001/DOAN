import { IContactItems } from "../../../types/types";

// contact items text
const contactDirectlyText = (
  <>
    levinhhung20@gmail.com
    <br />
    (+84) 557-771-315
  </>
);

const headQuaterText = (
  <>2 Đ. 3 Tháng 2, An Phú, Ninh Kiều, Cần Thơ, Việt Nam</>
);

const workWithUsText = (
  <>
    Gửi CV của bạn đến email:
    <br />
    levinhhung20@gmail.com
  </>
);

const customerServiceText = (
  <>
    levinhhung20@gmail.com
    <br />
    (+84) 557-771-315
  </>
);

const mediaRelationsText = (
  <>
    levinhhung20@gmail.com
    <br />
    (+84) 557-771-315
  </>
);

const vendorSupportText = (
  <>
    levinhhung20@gmail.com
    <br />
    (+84) 557-771-315
  </>
);

// contact items data
export const ContactItemsData: IContactItems[] = [
  {
    id: 1,
    title: "Liên hệ trực tiếp",
    content: contactDirectlyText,
  },
  {
    id: 2,
    title: "Chi nhánh chính",
    content: headQuaterText,
  },
  {
    id: 3,
    title: "Cộng tác với chúng tôi",
    content: workWithUsText,
  },
  {
    id: 4,
    title: "Dịch vụ khách hàng",
    content: customerServiceText,
  },
  {
    id: 5,
    title: "Quan hệ truyền thông",
    content: mediaRelationsText,
  },
  {
    id: 6,
    title: "Hỗ trợ đối tác",
    content: vendorSupportText,
  },
];
