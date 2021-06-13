const style = (theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "30px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  Logo: {
    width: "150px",
  },

  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
});

export default style;
