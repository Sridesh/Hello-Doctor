import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

import hospitalIcon from "../assets/hospital.png";
import logoutIcon from "../assets/logout.png";

const SideBar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={hospitalIcon} alt="Hospital" width="30" />
        </div>
      </div>

      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner">
          <img src={logoutIcon} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => (
  <div className="channel-list__header">
    <div className="channel-list__header__text">Medical Pager</div>
  </div>
);

function ChannelListContainer() {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(ListProps) => {
            <TeamChannelList {...ListProps} type="team" />;
          }}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(ListProps) => {
            <TeamChannelList {...ListProps} type="messaging" />;
          }}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
}

export default ChannelListContainer;
