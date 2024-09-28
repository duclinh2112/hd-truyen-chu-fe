import LOGO from '@assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

import Tag from '@/components/common/tag'
import IconPrivacy from '@/components/icons/privacy'
import { TAG_FOOTER } from '@/utils/data'

import AppContainer from '../container'

const Footer = () => {
  return (
    <div className='bg-footer px-[64px] py-[32px] text-header'>
      <AppContainer>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col items-start gap-[32px]'>
            <div>
              <Link href='/'>
                <Image src={LOGO} alt='Động truyện' width={65} height={32} />
              </Link>
            </div>
            <div className='flex flex-col items-start gap-[8px]'>
              <div className='text-[16px]'>Email: hdtruyen@gmail.com</div>
              <button className='flex flex-row items-center gap-[8px] rounded-[8px] bg-white px-[16px] py-[8px]'>
                <IconPrivacy />
                <div className='text-[14px] font-medium text-black'>
                  Chính sách bảo mật
                </div>
              </button>
            </div>
          </div>
          <div className='flex w-[667px] flex-col items-start gap-[16px]'>
            <div className='flex flex-row flex-wrap gap-[8px]'>
              {TAG_FOOTER.map((tag) => (
                <Tag key={tag.id} content={tag.content} />
              ))}
            </div>
            <div className='text-left text-[14px] leading-[24px]'>
              Mọi thông tin và hình ảnh trên website đều được sưu tầm trên
              Internet. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông
              tin nào trên web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức
              nào, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  )
}

export default Footer
