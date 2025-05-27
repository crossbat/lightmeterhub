import ItemMasonryLayout from "@/components/eachItemMasonry/itemMasonry";
import eachItems from '../../../masonry-data.json'

export default function ImageDetail() {
  return (
    <ItemMasonryLayout eachItems={eachItems} />
  )
}
