import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { debounce } from "lodash";

import Typography from "@material-ui/core/Typography";
import InfiniteScroll from "react-infinite-scroll-component";

import {
	getPhotos,
	ToggleFavoritePhoto,
	searchPhoto,
} from "store/actions/actions";
import { photosSelector } from "store/reducers/photoReducer";
import { IPhoto } from "models/IPhoto";
import Loading from "assets/imgs/4200_spinner-loader-animation.gif";
import Photo from "components/Photo";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function Home() {
	const dispatch = useDispatch();
	const [filter, setFilter] = useState("");
	const photos = useSelector(photosSelector.getPhotos)(filter);
	const { items = [], paged, limit, search, loading, totalItem } = photos;
	const maxPage = Math.ceil(totalItem / limit);
	const fetch = useCallback((): void => {
		if (!loading && paged <= maxPage) {
			dispatch(getPhotos(paged, limit, search));
		}
	}, [paged, limit, search]);

	useEffect(() => {
		fetch();
	}, []);

	const handleToggleFavorite = useCallback(
		(id: string, isFavorite: boolean) => {
			dispatch(ToggleFavoritePhoto(id));
		},
		[],
	);

	const handleFilterFavoriteImage = useCallback(() => {
		if (filter === "Favorite") {
			setFilter("");
		} else {
			setFilter("Favorite");
		}
	}, [filter]);

	const debouncedSave = useCallback(
		debounce((value) => {
			dispatch(searchPhoto(value));
		}, 200),
		[], // will be created only once initially
	);

	const handleSearch = useCallback((e) => {
		debouncedSave(e.target.value);
	}, []);

	const renderPhotos = useCallback(() => {
		if (!items || !items.length) {
			return null;
		}
		return items.map((photo: IPhoto) => {
			return (
				<Grid key={photo.id} item xs={2} md={3}>
					<Photo
						id={photo.id}
						thumb={photo.thumb}
						isFavorite={photo.isFavorite}
						onToggleFavorite={handleToggleFavorite}
					/>
				</Grid>
			);
		});
	}, [items]);

	return (
		<Container maxWidth="md">
			<Typography align="center" variant="h2" component="h2" gutterBottom>
				Images Library
			</Typography>
			<Grid
				container
				direction="row"
				justify="space-between"
				alignItems="center">
				<Grid item>
					<Button
						style={{ marginBottom: "30px" }}
						variant="contained"
						onClick={handleFilterFavoriteImage}
						color="secondary">
						Favorite Images
					</Button>
				</Grid>
				<Grid item>
					<TextField
						style={{ marginBottom: "30px" }}
						id="search-text"
						label="Search"
						defaultValue=""
						onInput={handleSearch}
					/>
				</Grid>
			</Grid>

			<InfiniteScroll
				style={{
					overflow: "hidden",
				}}
				next={fetch}
				hasMore={true}
				dataLength={items.length}
				loader={null}>
				<Grid container spacing={2}>
					{renderPhotos()}
				</Grid>
			</InfiniteScroll>
			{loading && <img width="30" src={Loading} />}
		</Container>
	);
}

export default React.memo(Home);
