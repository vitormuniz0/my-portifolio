import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../Components/StyledsButton/styledButton";
import theme from "../../../../theme";
import AnimatedBackground from "../../../../Components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  maxWidth: "250px",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  margin: "auto",
  display: "block",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={5}
            textAlign="center"
            display="flex"
            justifyContent="center"
            position="relative"
          >
            <Box
              position="absolute"
              width={"100%"}
              top={-100}
              height="100%"
              zIndex={0}
            >
              <AnimatedBackground />
            </Box>
            <StyledImg
              src={Avatar}
              alt="Avatar"
              style={{ position: "relative", zIndex: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={7} textAlign="center">
            <Typography color="primary.contrastText" variant="h1" pb={2}>
              Vitor Muniz
            </Typography>
            <Typography color="primary.contrastText" variant="h2">
              I'm a Software Developer
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={2} pt={3}>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton>
                  <MailOutlineIcon />
                  <Typography>Contact Me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
