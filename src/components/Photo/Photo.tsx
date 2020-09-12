import React, { useCallback } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PHOTO_ROUTE } from "consts/route";
import { Link } from "react-router-dom";
import { IPhotoProps } from "models/IPhoto";
import FavoriteIcon from "@material-ui/icons/Favorite";
import classnames from "classnames";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		photoBox: {
			paddingTop: "56.25%",
			position: "relative",
		},
		img: {
			position: "absolute",
			top: "0px",
			left: "0px",
			width: "100%",
			height: "100%",
			"object-fit": "cover",
		},
		icon: {
			position: "absolute",
			top: "10px",
			left: "10px",
			zIndex: 2,
			fill: "#fff",
			cursor: "pointer",
		},
		iconAcitve: {
			fill: "red",
		},
	}),
);
function Photo({ id, thumb, isFavorite, onToggleFavorite }: IPhotoProps) {
	const classes = useStyles();

	const handleFavoriteClick = useCallback(() => {
		onToggleFavorite(id, !isFavorite);
	}, []);
	return (
		<div className={classes.photoBox}>
			<Link to={PHOTO_ROUTE.create(id)}>
				<img className={classes.img} src={thumb.url} alt={thumb.alt} />
			</Link>
			<FavoriteIcon
				className={classnames(classes.icon, {
					[classes.iconAcitve]: isFavorite,
				})}
				onClick={handleFavoriteClick}
			/>
		</div>
	);
}

export default React.memo(Photo);
