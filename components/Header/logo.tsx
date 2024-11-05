import styled from '@emotion/styled'

const Wrap = styled.div`
  width: 100px;
  height: 30px;
  svg {
    path:nth-child(1) {
      fill: #fff
    }
    path:nth-child(2) {
      stroke: #fff;
    }
  }
`

export default function Logo() {
  return (
    <Wrap>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" fill="none" viewBox="0 0 414 134">
        <path fill="#000" d="M50.64 97V48.232l-.96-7.68h59.904v9.216H63.312v14.016h35.904v9.504H63.312V97H50.64Zm69.469 0V48.232l-.96-7.68h59.904v9.216h-46.272v14.016h35.904v9.504h-35.904V97h-12.672Zm68.509 0V40.552h12.672V97h-12.672Zm28.991 0V48.232l-.96-7.68h14.592l21.696 38.4 22.464-38.4h12.96V97h-12.672V61.192h-1.056l-3.744 8.352-12.096 21.696h-11.616l-12.096-21.696-3.84-8.352h-.96V97h-12.672Zm102.742 0c-4.544 0-8.096-.64-10.656-1.92-2.56-1.28-4.352-3.2-5.376-5.76-1.024-2.56-1.536-5.728-1.536-9.504V58.408c0-6.144 1.376-10.656 4.128-13.536 2.752-2.944 7.232-4.416 13.44-4.416h28.896c4.416 0 7.776.256 10.08.768 2.368.448 3.552.928 3.552 1.44l-1.92 7.968c-1.088-.192-4.32-.384-9.696-.576-5.312-.256-13.056-.384-23.232-.384h-4.896c-5.12 0-7.68 2.272-7.68 6.816v24.48c0 2.176.544 3.872 1.632 5.088 1.152 1.152 3.168 1.728 6.048 1.728h3.936c6.144 0 11.328-.032 15.552-.096 4.224-.128 7.712-.224 10.464-.288V74.344l-5.76.096-12.576.96v-9.408h30.912v26.976l.96 2.016c0 .512-1.344.992-4.032 1.44-2.688.384-7.232.576-13.633.576h-28.607Z"/>
        <path stroke="#000" strokeWidth="13" d="M317 127h90V37M97 7H7v90"/>
      </svg>
    </Wrap>
  )
}
