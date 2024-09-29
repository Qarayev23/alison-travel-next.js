export const HtmlContent = ({ html, className }) => {
  return <div className={className ? className : ""} dangerouslySetInnerHTML={{ __html: html }} />
}
