export function NiceButton({ Icon, children, ...restOfProps }) {
  console.log('restOfProps', restOfProps)
  return (
    <section {...restOfProps} className="nice-button">
      <Icon />
      {children}
    </section>
  )
}
