import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { alpha, styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { users } from "../data/user";
import "./App.css";

import { useSpring, animated } from "react-spring";

function MinusCircle(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{
        width: 14,
        height: 14,
        borderRadius: 10,
        background: "blueviolet",
      }}
      {...props}
    >
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}
function PlusCircle(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{
        width: 14,
        height: 14,
        borderRadius: 10,
        background: "blueviolet",
      }}
      {...props}
    >
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function MinusSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ width: 14, height: 14, borderRadius: 2 }}
      {...props}
    >
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}
function PlusSquare(props) {
  return (
    <SvgIcon
      fontSize="inherit"
      style={{ width: 14, height: 14, borderRadius: 2 }}
      {...props}
    >
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
    position: "relative",
    "&:before": {
      pointerEvents: "none",
      content: '""',
      position: "absolute",
      width: 10,
      left: -26,
      top: 1,
      borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px solid ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  labelRoot: {
    borderRadius: 2,
  },
}));

function CustomizedTreeView() {
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={["1"]}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      sx={{
        flexGrow: 1,
        overflowY: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledTreeItem nodeId="1" label="List of users">
        {users.map((user) => (
          <StyledTreeItem
            key={user.name + user.username + `${user.id}`}
            nodeId={`${user.id}2`}
            label={user.name}
          >
            <StyledTreeItem
              nodeId="3"
              label={`email: ${user.email}`}
              className="changeColor"
              radio
            />
            <StyledTreeItem nodeId="4" label={`phone: ${user.phone}`} />
            <StyledTreeItem
              nodeId="5"
              label={`website: ${user.website}`}
              className="changeColor"
            />
            <StyledTreeItem nodeId={`${user.id}6`} label="company">
              <StyledTreeItem
                nodeId="6"
                label={`Name: ${user.company.name}`}
                className="changeColor"
              />
              <StyledTreeItem
                nodeId="8"
                label={`catchPhrase: ${user.company.catchPhrase}`}
              />
              <StyledTreeItem
                nodeId="9"
                label={`bs: ${user.company.bs}`}
                className="changeColor"
              />
            </StyledTreeItem>
            <StyledTreeItem nodeId={`${user.id}0`} label="address">
              <StyledTreeItem
                nodeId="11"
                label={`street: ${user.address.street}`}
                className="changeColor"
              />
              <StyledTreeItem
                nodeId="12"
                label={`zipcode: ${user.address.city}`}
              />
              <StyledTreeItem
                nodeId="13"
                label={`zipcode: ${user.address.zipcode}`}
                className="changeColor"
              />
            </StyledTreeItem>
          </StyledTreeItem>
        ))}
      </StyledTreeItem>
    </TreeView>
  );
}

function App() {
  return (
    <div style={{ display: "flex" }}>
      <CustomizedTreeView />
    </div>
  );
}

export default App;
