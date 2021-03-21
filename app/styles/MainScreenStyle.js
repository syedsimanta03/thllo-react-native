import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors.js';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({

	
	// BODY
	
  body: {
  backgroundColor:"#0f7f88",
	flex:1,
  },
  
// MAIN ELEMENTS
  
  header: {
	flex:0.13,
	display:"flex",
  },
  page1: {
	backgroundColor:"#0f7f88",
	flex:0.75,
	display:"flex",
  },
  page2: {
	backgroundColor:"green",
	flex:0.75,
	display:"none",
  },
  page3: {
	backgroundColor:"blue",
	flex:0.75,
	display:"none",
  },
  page4: {
	backgroundColor:"pink",
	flex:0.75,
	display:"none",
  },
  page5: {
	backgroundColor:"white",
	flex:0.75,
	display:"none",
  },
  bottom_menu: {
	flex:0.12,
	display:"flex",
	flexDirection: 'row',
  },
  

// HEADER
  header_top: {
	backgroundColor:"#0f7f88",
	flex:0.2,
  },
  header_bottom: {
	backgroundColor:"#24a5b0",
	flex:0.8,
	flexDirection: 'row',
  },  
  header_bottom_left: {
	flex:0.75,
	justifyContent: 'center',
	paddingLeft: 20,
  },
  header_bottom_left_text: {
	fontSize: 60,
	color: '#eee',
  },
  header_bottom_right: {
	flex:0.25,
  },
  search_area_icon: {
	height:'100%',
	width:'100%',
  },

// FOOTER
  bottom_menu_tab1_active: {
	  flex:0.2,
	display:"flex",
	backgroundColor:"#0f7f88",
  },
  bottom_menu_tab2_active: {
	flex:0.2,
	display:"none",
	backgroundColor:"#0f7f88",
  },
  bottom_menu_tab3_active: {
	flex:0.2,
	display:"none",
	backgroundColor:"#0f7f88",
  },
  bottom_menu_tab4_active: {
	flex:0.2,
	display:"none",
	backgroundColor:"#0f7f88",
  },
  bottom_menu_tab5_active: {
	flex:0.2,
	display:"none",
	backgroundColor:"#0f7f88",
  },
  
  bottom_menu_tab1_inactive: {
	flex:0.2,
	display:"none",
	backgroundColor:"#24a5b0",
  },
  bottom_menu_tab2_inactive: {
	flex:0.2,
	display:"flex",
	backgroundColor:"#24a5b0",
  },
  bottom_menu_tab3_inactive: {
	flex:0.2,
	display:"flex",
	backgroundColor:"#24a5b0",
  },
  bottom_menu_tab4_inactive: {
	flex:0.2,
	display:"flex",
	backgroundColor:"#24a5b0",
  },
  bottom_menu_tab5_inactive: {
	flex:0.2,
	display:"flex",
	backgroundColor:"#24a5b0",
  },
  
  bottom_menu_icon: {
	width:"100%",
	height:"65%",
  },  
  bottom_menu_text: {
	textAlign:"center",
	color:"#eee",	  
	fontSize: 20,
  },
  
///////////// PAGES

// PAGE 1

  page1_top: {
	flex:0.6,
	marginTop:8,
  },
  page1_bottom: {
	flex:0.4,
	borderColor:"#000",
	borderWidth:1,
	marginTop:8,
  },
  page1_items_container: {
	flex:1,
  },
  page1_item: {
    backgroundColor: '#eeeeee',
    paddingTop: 15,
	width:screenWidth*0.75,
    marginVertical: 1,
    marginHorizontal: 7,
	borderRadius:5,
  },
  page1_item_title: {
	textAlign:"center",
    fontSize: 25,
	fontWeight:"bold",
	color:"#0f7f88",	  
  },
  page1_item_datecircle: {
	borderColor:"#0f7f88",
	borderWidth:10,
	borderRadius:100,
	marginTop:10,
	width:"44%",
	marginLeft:"27%",
	justifyContent: 'center',
  },
  page1_item_daynum: {
	textAlign:"center",
	color:"#0f7f88",	 
    fontSize: 75,
	fontWeight:"bold", 
	marginTop:5,
  },
  page1_item_monthstr: {
	textAlign:"center",
	color:"#0f7f88",
    fontSize: 18,
	marginTop:-20,
	marginBottom:20,
  },
  
  page1_item_subtitle: {
	textAlign:"center",
	color:"#0f7f88",
    fontSize: 15,
	marginTop:20,
  },
  page1_item_button: {
	textAlign:"center",
	color:"#eee",
	backgroundColor:"#24a5b0",
	marginTop:20,
	lineHeight:40,
	width:"70%",
	marginLeft:"14%",
	borderRadius:5,
	paddingBottom:0,
  },
});
