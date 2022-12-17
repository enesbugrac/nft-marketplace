import { useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import Router from 'next/router'

const style = {
  wrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer`,
  imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
  nftImg: `w-full object-cover`,
  details: `p-3`,
  info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
  infoLeft: `flex-0.6 flex-wrap`,
  collectionName: `font-semibold text-sm text-[#8a939b]`,
  assetName: `font-bold text-lg mt-2`,
  infoRight: `flex-0.4 text-right`,
  priceTag: `font-semibold text-sm text-[#8a939b]`,
  priceValue: `flex items-center text-xl font-bold mt-2`,
  ethLogo: `h-5 mr-2`,
  likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3`,
  likeIcon: `text-xl mr-2`,
}

const CollectionCard = ({ collection, title, listings }) => {
  const [isListed, setIsListed] = useState(false)
  console.log(collection)
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        Router.push({
          pathname: `/collections/0x79170bCcB02F614Bc1a6BaBaAA97eC8b73a74816`,
        })
      }}
    >
      <div className={style.imgContainer}>
        <img
          alt={collection?.title}
          src={collection?.imageUrl}
          className={style.nftImg}
        />
      </div>
      <div className={style.details}>
        <div className={style.info}>
          <div className={style.infoLeft}>
            <div className={style.collectionName}>{collection?.title}</div>
            <div className={style.assetName}>
              Creator: {collection?.creator}
            </div>
          </div>

          <div className={style.infoRight}>
            <div className={style.priceTag}>Price</div>
            <div className={style.priceValue}>
              {collection?.floorPrice}
              ETH
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
