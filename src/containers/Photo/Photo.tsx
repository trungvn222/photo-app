import React, { useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPhotoDetail } from "store/actions/actions";
import { photoDetailSelector } from "store/reducers/photoDetailReducer";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { HOME_ROUTE } from "consts/route";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GetAppIcon from "@material-ui/icons/GetApp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		iconBox: {
			display: "flex",
			alignItems: "center",
		},
		icon: {
			marginRight: "5px",
		},
		container: {
			paddingTop: "50px",
		},
		backTo: {
			textDecoration: "none",
			fontSize: "20px",
			display: "flex",
			alignItems: "center",
			color: "#000",
			marginBottom: "20px",
		},
	}),
);

function Photo() {
	const dispatch = useDispatch();
	const { id = "" } = useParams();
	const photo = useSelector(photoDetailSelector.getPhoto);
	const { imageFull, likes, views, downloads } = photo.photo;
	const classes = useStyles();

	const fetch = useCallback(() => {
		if (id) {
			dispatch(getPhotoDetail(id));
		}
	}, [id]);

	useEffect(() => {
		fetch();
	}, []);

	return (
		<Container className={classes.container} maxWidth="md">
			<Link className={classes.backTo} to={HOME_ROUTE.create()}>
				<ArrowBackIcon /> Gallery
			</Link>
			<Card>
				<CardHeader title={`ID#${id}`} />
				<CardMedia>
					<img src={imageFull.url} alt={imageFull.alt} />
				</CardMedia>
				<CardActions>
					<div className={classes.iconBox}>
						<FavoriteIcon className={classes.icon} />
						{likes}
					</div>
					<div className={classes.iconBox}>
						<VisibilityIcon className={classes.icon} />
						{views}
					</div>
					<div className={classes.iconBox}>
						<GetAppIcon className={classes.icon} />
						{downloads}
					</div>
				</CardActions>
			</Card>
		</Container>
	);
}

export default React.memo(Photo);
