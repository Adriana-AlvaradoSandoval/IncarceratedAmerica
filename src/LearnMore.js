import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import "../src/LearnMore.css";

function LearnMore() {
    return (
        <div>
            <Box className="hero">
                <Box paddingTop={20}>Learn More</Box>
            </Box>
            <Container maxWidth="lg" className="articlceContainer">
                <Typography variant="h4" className="articleTitle">
                    Articles
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 1
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 2
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 3
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 4
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 5
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 6
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 7
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 8
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="cards">
                            <CardActionArea>
                                <CardMedia
                                className="media"
                                image="../public/Senate45.png"
                                title="Political Power of Prisons"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Article 9
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="cardActions">
                                <Box className="author">
                                    <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                        Guy Clemons
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                        May 14, 2020
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <BookmarkBorderIcon />
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
               
            </Container>
            
        </div>
    );
}

export default LearnMore