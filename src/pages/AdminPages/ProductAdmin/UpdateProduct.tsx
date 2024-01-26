import React, { useEffect, useState } from "react";
import { Form, Space, Input, Radio, Divider, message, UploadFile } from "antd";
import HeadForm from "../../../components/HeadForm/HeadForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import { uploadImages } from "../../../api/upload";
import UploadButton from "./components/UploadButton";
import BlockForm from "./components/BlockForm";
import TextQuill from "./components/TextQuill";
import { getOne, updateProduct } from "../../../api/product";
import { IProduct, img } from "../../../interface/product";

const UpdateProduct = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [files, setFiles] = useState<File[]>([]);
  const [defaultImages, setDefaultImages] = useState([]);
  const [defaultDesc, setDefaultDesc] = useState<string>("");
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [data, setData] = useState<IProduct>();
  const featchProducts = async () => {
    const { data } = await getOne(id);
    setData(data);
  };
  useEffect(() => {
    featchProducts();
  }, []);
  const handleGetFiles = (files: File[], public_id: string | undefined) => {
    if (!public_id) {
      form.setFieldValue("images", files);
      setFiles(files);
    } else {
      setDefaultImages(() =>
        defaultImages.filter((img) => img.uid !== public_id)
      );
      form.setFieldValue("images", files);
      setFiles(files);
    }
  };
  useEffect(() => {
    const formatedFiles: UploadFile[] = [] as UploadFile[];
    data?.images?.forEach((img: img) => {
      const file: UploadFile = {
        uid: img.public_id,
        url: img.url,
        name: "images",
        status: "done",
      };
      formatedFiles.push(file);
    });
    setDefaultImages(formatedFiles);
    setProductName(data?.name);
    setDefaultDesc(data?.desc);
    setProductPrice(data ? data.price : 0);
    const newBody = {
      ...data,
      _id: undefined,
      createdAt: undefined,
      updatedAt: undefined,
      images: data?.images?.map((image) => ({
        url: image.url,
        public_id: image.public_id,
      })),
    };
    form.setFieldsValue({
      ...newBody,
    });
  }, [data, form]);
  const handleSubmit = async () => {
    try {
      const filesToUpload = files.filter((file) => file !== undefined);
      if (filesToUpload.length > 0) {
        const {
          data: { body },
        } = await uploadImages(filesToUpload);
        const newImages = defaultImages.map((image) => ({
          url: image.url,
          public_id: image.uid,
        }));
        form.setFieldValue("images", [...body.data, ...newImages]);
      }
      const newFormData = form.getFieldsValue(true);
      newFormData.shipments = undefined;
      await updateProduct({
        id: id,
        ...{ ...newFormData, productName },
      }).then((res) => {
        res;
        message.success("Cập nhật sản phẩn thành công!");
        navigate("/manage/products");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="">
      <Form
        className="w-[100%] mt-20 pb-10"
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
      >
        <HeadForm
          placeHolder="Sản phẩm không tên"
          linkBack="/manage/products"
          changeValue={(value) => setProductName(value)}
          initValue={productName}
        />
        <div className="w-full mt-5 flex flex-wrap gap-5">
          <div className="xl:min-w-[800px] flex flex-col gap-5 w-full">
            <BlockForm title="Hình ảnh sản phẩm">
              <Form.Item
                name="images"
                hasFeedback
                rules={[{ required: true, message: "Vui lòng tải ảnh lên !" }]}
              >
                <UploadButton
                  maxCount={4}
                  multiple
                  listStyle="picture-card"
                  getListFiles={handleGetFiles}
                  defaultFiles={defaultImages}
                />
              </Form.Item>
            </BlockForm>
            <BlockForm title="Thông tin sản phẩm">
              <Space size={"middle"} direction="vertical" className="w-full">
                <p className="text-xl font-thin tracking-wider">
                  Thông tin cơ bản
                </p>
                <Space direction="horizontal" className="w-full">
                  <Form.Item
                    className="w-[500px]"
                    name={"name"}
                    label={
                      <p className="text-lg font-semibold">Tên sản phẩm</p>
                    }
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng điền tên sản phẩm !",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      placeholder="Thêm tên sản phẩm"
                      className="w-full p-2"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </Form.Item>
                </Space>
                <Form.Item
                  name={"desc"}
                  label={<p className="text-lg font-semibold">Mô tả</p>}
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng điền mô tả sản phẩm !",
                    },
                  ]}
                >
                  <TextQuill
                    defaultValue={defaultDesc}
                    getValue={(value) => form.setFieldValue("desc", value)}
                  />
                </Form.Item>
              </Space>
            </BlockForm>
            <BlockForm title="Chính sách giá">
              <Space direction="vertical" className="w-full">
                <div className="w-full flex justify-start items-center gap-2">
                  <Form.Item
                    className="w-full"
                    name={"price"}
                    label={<p className="text-lg font-semibold">Giá bán</p>}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng điền giá sản phẩm !",
                      },
                    ]}
                  >
                    <Input
                      type="number"
                      placeholder="Thêm giá bán sản phẩm"
                      className="w-1/2 p-2"
                      max={100000000}
                      min={0}
                      onChange={(e) => setProductPrice(Number(e.target.value))}
                    />
                  </Form.Item>
                </div>
              </Space>
            </BlockForm>
          </div>
        </div>
        <Divider />
        <div className="flex justify-end items-center gap-5 pb-[50px]">
          <Link to={"/manage/products"}>
            <button
              type="button"
              className="border-[1px] border-[#80b235] text-greenPrimary py-2 px-5 rounded-xl font-semibold text-[1rem] hover:bg-greenPrimary duration-200 hover:text-white"
            >
              Hủy
            </button>
          </Link>
          <Form.Item className="flex flex-col items-center !mb-0">
            <button
              className="!bg-greenPrimary !text-white py-2 px-5 rounded-xl font-semibold text-[1rem]"
              type="submit"
            >
              Lưu
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProduct;
