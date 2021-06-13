const styles = (theme) => ({
  button: { color: "#fff" },
  marketSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  rootPagination: {
    display: "flex",
    justifyContent: "center",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
});
export default styles;
