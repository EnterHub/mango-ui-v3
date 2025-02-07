import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  BtcMonoIcon,
  CopeMonoIcon,
  DogeMonoIcon,
  EthMonoIcon,
  FidaMonoIcon,
  FttMonoIcon,
  MediaMonoIcon,
  MerMonoIcon,
  MngoMonoIcon,
  RayMonoIcon,
  SolMonoIcon,
  SrmMonoIcon,
  StepMonoIcon,
  SushiMonoIcon,
  UniMonoIcon,
  UsdtMonoIcon,
  AdaMonoIcon,
} from './icons'

const symbolIcons = {
  BtcMonoIcon,
  CopeMonoIcon,
  DogeMonoIcon,
  EthMonoIcon,
  FidaMonoIcon,
  FttMonoIcon,
  MediaMonoIcon,
  MerMonoIcon,
  MngoMonoIcon,
  RayMonoIcon,
  SolMonoIcon,
  SrmMonoIcon,
  StepMonoIcon,
  SushiMonoIcon,
  UniMonoIcon,
  UsdtMonoIcon,
  AdaMonoIcon,
}

export default function MarketMenuItem({ menuTitle = '', linksArray = [] }) {
  const { asPath } = useRouter()
  const [openState, setOpenState] = useState(false)

  const iconName = `${menuTitle.substr(0, 1)}${menuTitle
    .substr(1, 4)
    .toLowerCase()}MonoIcon`
  const SymbolIcon = symbolIcons[iconName]

  const onHover = (open, action) => {
    if (
      (!open && action === 'onMouseEnter') ||
      (open && action === 'onMouseLeave')
    ) {
      setOpenState((openState) => !openState)
    }
  }

  return (
    <div className="relative">
      <div
        onMouseEnter={() => onHover(openState, 'onMouseEnter')}
        onMouseLeave={() => onHover(openState, 'onMouseLeave')}
        className="flex flex-col h-10"
      >
        <div className="flex items-center px-3 h-10 text-th-fgd-3 hover:text-th-primary focus:outline-none">
          <SymbolIcon
            className={`h-3.5 w-auto mr-1.5 ${
              asPath.includes(menuTitle) && 'text-th-primary'
            }`}
          />
          <span
            className={`font-normal text-xs ${
              asPath.includes(menuTitle) && 'text-th-primary'
            }`}
          >
            {menuTitle}
          </span>
        </div>
        {openState ? (
          <div className="absolute top-10 z-10">
            <div className="relative bg-th-bkg-3 divide-y divide-th-fgd-4 px-3 rounded rounded-t-none">
              {linksArray.map((m) => (
                <Link
                  href={{
                    pathname: '/market',
                    query: { name: m.name },
                  }}
                  key={m.name}
                  shallow={true}
                >
                  <a
                    className={`block py-2 text-th-fgd-1 text-xs hover:text-th-primary whitespace-nowrap ${
                      asPath.includes(menuTitle)
                        ? asPath.includes(m.name.slice(-4))
                          ? 'text-th-primary'
                          : 'text-th-fgd-1'
                        : null
                    }`}
                  >
                    {m.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
