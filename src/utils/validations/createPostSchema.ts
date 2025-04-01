import * as yup from 'yup'

export const createPostSchema = yup.object().shape({
  name: yup.string().required('Vui lòng nhập tên truyện'),
  category: yup.string().required('Vui lòng chọn danh mục'),
  child_category: yup.string().required('Vui lòng chọn thể loại'),
  description: yup.string().required('Vui lòng nhập nội dung giới thiệu'),
  image: yup.mixed().required('Vui lòng chọn ảnh cho truyện'),
})
