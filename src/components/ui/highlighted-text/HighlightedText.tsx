type HighlightedTextProps = {
  text: string
  textStyles: string
  highlightStyles: string
}

const HighlightedText = ({ text, textStyles, highlightStyles }: HighlightedTextProps) => (
  <div
    className={`inline-flex items-center justify-start rounded-full bg-accent ${highlightStyles}`}
  >
    <span className={`font-medium text-foreground ${textStyles}`}>{text}</span>
  </div>
)

export default HighlightedText
