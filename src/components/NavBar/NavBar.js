import React from 'react';
import './NavBar.css'
import {NavLink} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import {alpha, styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import logo from '../../assets/images/post_logo.png';

const NavBar = () => {

	const Search = styled('div')(({theme}) => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.black, 0.1),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.black, 0.2),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	}));

	const SearchIconWrapper = styled('div')(({theme}) => ({
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}));

	// Style for input field
	const StyledInputBase = styled(InputBase)(({theme}) => ({
		color: '#fff',
		'& .MuiInputBase-input': {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)})`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}));

	return (
		<div className="nav__wrapper">
			<Box sx={{flexGrow: 1}}>
				{/*Start nav bar*/}
				<AppBar position="static" sx={{background: "transparent", boxShadow: "none"}}>
					<Toolbar sx={{justifyContent: "space-around"}}>

						{/*Start Logo*/}
						<div className="nav__logo">
							<img src={logo} alt="logo"/>
						</div>
						{/*End Logo*/}

						{/*Link and Search bar*/}
						<div className="nav__link">
							<NavLink className="item__link" to="/">Home</NavLink>
							<NavLink className="item__link" to="/about">About</NavLink>
							<NavLink className="item__link" to="/posts">Posts</NavLink>
							<NavLink className="item__link" to="/contact">Contact</NavLink>

							{/*Start search field*/}
							<Search>
								<SearchIconWrapper>
									<SearchIcon sx={{color: "#fff"}}/>
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search…"
									inputProps={{'aria-label': 'search'}}
								/>
							</Search>
							{/*End search field*/}
						</div>
						{/*End Link and Search bar*/}

					</Toolbar>
				</AppBar>
				{/*End nav bar*/}
			</Box>
		</div>
	);
};

export default NavBar;