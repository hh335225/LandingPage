import React from "react";
import './header.scss';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import avatarImage from '../../../assets/avatar.png';
import { ReactComponent as Heart } from '../../../assets/icons/heart.svg';
import { ReactComponent as Notification } from '../../../assets/icons/notification.svg';
import { ReactComponent as Setting } from '../../../assets/icons/setting.svg';
import Icon from "../../atoms/icon/icon.tsx";
import Avatar from "../../atoms/avatar/avatar.tsx";
import SearchBar from "../../molecules/searchBar/searchBar.tsx";

const Header = () => {
    return (
        <section className="header">
            <Logo />
            <SearchBar placeholder={"Search something here"} />
            <div className="info">
                <Icon icon={Heart} />
                <Icon icon={Notification} />
                <Icon icon={Setting} />
                <Avatar url={avatarImage} />
            </div>

        </section>
    )
}

export default Header;