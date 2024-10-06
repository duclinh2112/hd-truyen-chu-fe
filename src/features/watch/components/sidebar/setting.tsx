import React from 'react'

import { colors, fonts } from '@/utils/constants/setting'
import type { ISetting } from '@/utils/interface/ISetting'

const Setting = ({
  settings,
  onChangeSetting,
}: {
  settings: ISetting
  onChangeSetting: (setting: ISetting) => void
}) => {
  return (
    <>
      <div
        className='flex h-[52px] w-full items-center border-b px-4 font-semibold'
        style={{
          borderColor: settings.borderColor,
        }}
      >
        Cài đặt
      </div>
      <div className='h-full overflow-y-auto px-6'>
        <div className='flex flex-col items-start gap-8 py-10'>
          <div>
            <div className='mb-4 font-bold' style={{ color: settings.color }}>
              Màu sắc
            </div>
            <div className='flex items-start gap-6'>
              {colors.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className='size-[50px] cursor-pointer rounded-full border'
                    style={{
                      backgroundColor: item.background,
                      borderColor: item.borderColor,
                    }}
                    onClick={() =>
                      onChangeSetting({
                        ...settings,
                        background: item.background,
                        borderColor: item.borderColor,
                        color: item.color,
                      })
                    }
                  ></div>
                )
              })}
            </div>
          </div>
          <div className='w-full'>
            <div className='mb-4 font-bold' style={{ color: settings.color }}>
              Kiểu chữ
            </div>
            <div className='grid grid-cols-2 gap-6'>
              {fonts.map((item, idx) => {
                const isActive = item.value == settings.fontFamily
                return (
                  <div
                    key={idx}
                    className={`flex h-12 cursor-pointer items-center justify-center rounded border ${
                      isActive ? 'font-bold' : 'font-sans'
                    }`}
                    style={{
                      color: settings.color,
                      borderColor: settings.borderColor,
                    }}
                    onClick={() => {
                      onChangeSetting({
                        ...settings,
                        fontFamily: item.value,
                      })
                    }}
                  >
                    {item.label}
                  </div>
                )
              })}
            </div>
          </div>
          <div className='grid w-full grid-cols-2 gap-6'>
            <div>
              <div className='mb-4 font-bold' style={{ color: settings.color }}>
                Kiểu chữ
              </div>
              <div
                className='flex h-[40px] items-center justify-center border'
                style={{ borderColor: settings.borderColor }}
              >
                <div
                  className='flex size-[40px] cursor-pointer select-none items-center justify-center border-r'
                  style={{ borderColor: settings.borderColor }}
                  onClick={() => {
                    if (settings.fontSize > 12) {
                      onChangeSetting({
                        ...settings,
                        fontSize: settings.fontSize - 2,
                      })
                    }
                  }}
                >
                  -
                </div>
                <div className='flex size-full flex-1 items-center justify-center'>
                  {settings.fontSize}
                </div>
                <div
                  className='flex size-[40px] cursor-pointer select-none items-center justify-center border-l'
                  style={{ borderColor: settings.borderColor }}
                  onClick={() =>
                    onChangeSetting({
                      ...settings,
                      fontSize: settings.fontSize + 2,
                    })
                  }
                >
                  +
                </div>
              </div>
            </div>
            <div>
              <div className='mb-4 font-bold' style={{ color: settings.color }}>
                Giãn dòng
              </div>
              <div
                className='flex h-[40px] items-center justify-center border'
                style={{ borderColor: settings.borderColor }}
              >
                <div
                  className='flex size-[40px] cursor-pointer select-none items-center justify-center border-r'
                  style={{ borderColor: settings.borderColor }}
                  onClick={() => {
                    if (settings.lineHeight > 18) {
                      onChangeSetting({
                        ...settings,
                        lineHeight: settings.lineHeight - 2,
                      })
                    }
                  }}
                >
                  -
                </div>
                <div className='flex size-full flex-1 items-center justify-center'>
                  {settings.lineHeight}
                </div>
                <div
                  className='flex size-[40px] cursor-pointer select-none items-center justify-center border-l'
                  style={{ borderColor: settings.borderColor }}
                  onClick={() =>
                    onChangeSetting({
                      ...settings,
                      lineHeight: settings.lineHeight + 2,
                    })
                  }
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting
