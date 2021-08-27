interface Action {
  action: string,
  type: string,//"minor" | "major",
  tooltip: string,
  actionClickHandler: Function
}

export default Action;