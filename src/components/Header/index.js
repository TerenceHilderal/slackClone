import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';

function Header() {
	const [user] = useAuthState(auth);

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar
					onClick={() => auth.signOut()}
					src={user?.displayName}
					src={user?.photoURL}
				/>
				<AccessTimeIcon />
			</HeaderLeft>

			<HeaderSearch>
				<SearchIcon />
				<input type='text' placeholder='Search Master' />
			</HeaderSearch>

			<HeaderRight>
				<HelpOutlineIcon />
			</HeaderRight>
		</HeaderContainer>
	);
}

export default Header;

const HeaderRight = styled.div`
	flex: 0.3;
	display: flex;
	align-items: flex-end;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 20px;
	}
`;

const HeaderSearch = styled.div`
	flex: 0.4;
	opacity: 1;
	border-radius: 6px;
	border-color: #421f44;
	text-align: center;
	display: flex;
	padding: 0 50px;
	color: gray;
	border: 1px solid gray;
	> input {
		background-color: transparent;
		border: none;
		text-align: center;
		min-width: 30vw;
		outline: none;
		color: white;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	position: fixed;
	align-items: center;
	width: 100%;
	padding: 10px 0;
	color: white;
	background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
	flex: 0.3;
	display: flex;
	align-items: center;
	margin-left: 20px;

	> .MuiSvgIcon-root {
		margin-left: auto;
		margin-right: 30px;
	}
`;

const HeaderAvatar = styled(Avatar)`
	cursor: pointer;
	:hover {
		opacity: 0.8;
	}
`;
