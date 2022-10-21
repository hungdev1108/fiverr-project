import { Form, Input, DatePicker, Select } from "antd";
import moment from "moment";
import { useDispatch } from "react-redux";
import { putUserInfoAction } from "store/actions/UserManagerAction";
import "./UpdateInfoUser.scss";

const { Option } = Select;
const formItemLayout = {
  labelCol: { xs: { span: 10 }, sm: { span: 9 } },
  wrapperCol: { xs: { span: 10 }, sm: { span: 8 } },
};

export default function UpdateInfoUser({ userID, userInfo, setshowModal }) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    setshowModal(false);
    values.email = userInfo?.email;
    values.gender = userInfo?.gender;
    values.birthday = moment(values.birthday).format("MM/DD/YYYY");
    dispatch(putUserInfoAction(userID, values));
  };

  return (
    <div className="UpdateInfoUser">
      <Form
        {...formItemLayout}
        form={form}
        name="updateInfoUser"
        onFinish={onFinish}
        initialValues={{
          name: userInfo?.name,
          phone: userInfo?.phone,
          skill: userInfo?.skill,
          certification: userInfo?.certification,
          birthday: moment(userInfo?.birthday),
        }}
        scrollToFirstError
        size="large"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
              whitespace: true,
            },
            {
              message: "Your name is invalid!",
              type: "string",
              pattern:
                /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/g,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
            {
              message: "Your phone number is invalid!",
              pattern: /(84|0)+([0-9]{9})\b/,
            },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Birthday"
          name="birthday"
          rules={[{ required: true, message: "Please select your birthday!" }]}
        >
          <DatePicker format={'MM/DD/YYYY'} onChange={(date)=>console.log(date)} />
        </Form.Item>

        <Form.Item name="skill" label="Skill">
          <Select mode="multiple" placeholder="select your skills">
            {userInfo?.skill.map((item, index) => {
              return (
                <Option key={index} value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="certification" label="Certification">
          <Select mode="multiple" placeholder="select your certification">
            {userInfo?.certification.map((item, index) => {
              return (
                <Option key={index} value={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <div className="text-center">
          <button
            onClick={() => setshowModal(false)}
            type="button"
            className="btn btn-outline-danger mr-3"
          >
            Close
          </button>

          <button type="submit" className="btn btn-outline-success">
            Update
          </button>
        </div>
      </Form>
    </div>
  );
}
