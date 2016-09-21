// JavaScript Document
// calculator functions

function getUnit() {
      unitTotal = document.unitsizecalc.totalfield.value;
      if(unitTotal <= 0) {
         unitCalc = "You did not select anything.";
      }
      else if(unitTotal <= 225) {
         unitCalc = "5x5 (Approx 225 cu ft)";
      }
      else if(unitTotal <= 450) {
         unitCalc = "5x10 or 10x5 (Approx 450 cu ft)";
      }
	  else if(unitTotal <= 675) {
         unitCalc = "5x15 (Approx 675 cu ft)";
      }
	  else if(unitTotal <= 900) {
         unitCalc = "10x10 (Approx 900 cu ft)";
      }
      else if(unitTotal <= 1350) {
         unitCalc = "10x15 (Approx 1350 cu ft)";
      }
      else if(unitTotal <= 1800) {
         unitCalc = "10x20 (Approx 1800 cu ft)";
      }
	  else if(unitTotal <= 2700) {
         unitCalc = "10x30 or 15x20 (Approx 2700 cu ft)";
      }
      else if(unitTotal > 2701) {
         unitCalc = "See Managers";
      }
return unitCalc;
}

function addUp(form) {

var LR_bookcaseV;
LR_bookcaseV =parseInt(document.unitsizecalc.LR_bookcase.value);
if (isNaN(LR_bookcaseV) || LR_bookcaseV == "") {
	LR_bookcaseV = 0;
}
var APP_aircondV;
APP_aircondV =parseInt(document.unitsizecalc.APP_aircond.value);
if (isNaN(APP_aircondV) || APP_aircondV == "") {
	APP_aircondV = 0;
}
var MISC_baby_carriageV;
MISC_baby_carriageV =parseInt(document.unitsizecalc.MISC_baby_carriage.value);
if (isNaN(MISC_baby_carriageV) || MISC_baby_carriageV == "") {
	MISC_baby_carriageV = 0;
}
var APP_dehumidV;
APP_dehumidV =parseInt(document.unitsizecalc.APP_dehumid.value);
if (isNaN(APP_dehumidV) || APP_dehumidV == "") {
	APP_dehumidV = 0;
}
var LR_bookshelvesV;
LR_bookshelvesV =parseInt(document.unitsizecalc.LR_bookshelves.value);
if (isNaN(LR_bookshelvesV) || LR_bookshelvesV == "") {
	LR_bookshelvesV = 0;
}
var MISC_bicycleV;
MISC_bicycleV =parseInt(document.unitsizecalc.MISC_bicycle.value);
if (isNaN(MISC_bicycleV) || MISC_bicycleV == "") {
	MISC_bicycleV = 0;
}
var LR_cabinetV;
LR_cabinetV =parseInt(document.unitsizecalc.LR_cabinet.value);
if (isNaN(LR_cabinetV) || LR_cabinetV == "") {
	LR_cabinetV = 0;
}
var APP_dishwasherV;
APP_dishwasherV =parseInt(document.unitsizecalc.APP_dishwasher.value);
if (isNaN(APP_dishwasherV) || APP_dishwasherV == "") {
	APP_dishwasherV = 0;
}
var MISC_deskV;
MISC_deskV =parseInt(document.unitsizecalc.MISC_desk.value);
if (isNaN(MISC_deskV) || MISC_deskV == "") {
	MISC_deskV = 0;
}
var LR_chair_armV;
LR_chair_armV =parseInt(document.unitsizecalc.LR_chair_arm.value);
if (isNaN(LR_chair_armV) || LR_chair_armV == "") {
	LR_chair_armV = 0;
}
var APP_freezerV;
APP_freezerV =parseInt(document.unitsizecalc.APP_freezer.value);
if (isNaN(APP_freezerV) || APP_freezerV == "") {
	APP_freezerV = 0;
}
var MISC_fanV;
MISC_fanV =parseInt(document.unitsizecalc.MISC_fan.value);
if (isNaN(MISC_fanV) || MISC_fanV == "") {
	MISC_fanV = 0;
}
var LR_chair_straightV;
LR_chair_straightV =parseInt(document.unitsizecalc.LR_chair_straight.value);
if (isNaN(LR_chair_straightV) || LR_chair_straightV == "") {
	LR_chair_straightV = 0;
}
var APP_stoveV;
APP_stoveV =parseInt(document.unitsizecalc.APP_stove.value);
if (isNaN(APP_stoveV) || APP_stoveV == "") {
	APP_stoveV = 0;
}
var MISC_filecab_cdbdV;
MISC_filecab_cdbdV =parseInt(document.unitsizecalc.MISC_filecab_cdbd.value);
if (isNaN(MISC_filecab_cdbdV) || MISC_filecab_cdbdV == "") {
	MISC_filecab_cdbdV = 0;
}
var LR_chair_occasV;
LR_chair_occasV =parseInt(document.unitsizecalc.LR_chair_occas.value);
if (isNaN(LR_chair_occasV) || LR_chair_occasV == "") {
	LR_chair_occasV = 0;
}
var APP_refridgeV;
APP_refridgeV =parseInt(document.unitsizecalc.APP_refridge.value);
if (isNaN(APP_refridgeV) || APP_refridgeV == "") {
	APP_refridgeV = 0;
}
var MISC_filecab_2V;
MISC_filecab_2V =parseInt(document.unitsizecalc.MISC_filecab_2.value);
if (isNaN(MISC_filecab_2V) || MISC_filecab_2V == "") {
	MISC_filecab_2V = 0;
}
var LR_chair_overstuffV;
LR_chair_overstuffV =parseInt(document.unitsizecalc.LR_chair_overstuff.value);
if (isNaN(LR_chair_overstuffV) || LR_chair_overstuffV == "") {
	LR_chair_overstuffV = 0;
}
var APP_vacuumV;
APP_vacuumV =parseInt(document.unitsizecalc.APP_vacuum.value);
if (isNaN(APP_vacuumV) || APP_vacuumV == "") {
	APP_vacuumV = 0;
}
var MISC_filecab_4V;
MISC_filecab_4V =parseInt(document.unitsizecalc.MISC_filecab_4.value);
if (isNaN(MISC_filecab_4V) || MISC_filecab_4V == "") {
	MISC_filecab_4V = 0;
}
var LR_chair_rockingV;
LR_chair_rockingV =parseInt(document.unitsizecalc.LR_chair_rocking.value);
if (isNaN(LR_chair_rockingV) || LR_chair_rockingV == "") {
	LR_chair_rockingV = 0;
}
var APP_washing_machV;
APP_washing_machV =parseInt(document.unitsizecalc.APP_washing_mach.value);
if (isNaN(APP_washing_machV) || APP_washing_machV == "") {
	APP_washing_machV = 0;
}
var MISC_golfbagV;
MISC_golfbagV =parseInt(document.unitsizecalc.MISC_golfbag.value);
if (isNaN(MISC_golfbagV) || MISC_golfbagV == "") {
	MISC_golfbagV = 0;
}
var LR_deskV;
LR_deskV =parseInt(document.unitsizecalc.LR_desk.value);
if (isNaN(LR_deskV) || LR_deskV == "") {
	LR_deskV = 0;
}
var APP_dryerV;
APP_dryerV =parseInt(document.unitsizecalc.APP_dryer.value);
if (isNaN(APP_dryerV) || APP_dryerV == "") {
	APP_dryerV = 0;
}
var MISC_hamperV;
MISC_hamperV =parseInt(document.unitsizecalc.MISC_hamper.value);
if (isNaN(MISC_hamperV) || MISC_hamperV == "") {
	MISC_hamperV = 0;
}
var LR_fireplace_equipV;
LR_fireplace_equipV =parseInt(document.unitsizecalc.LR_fireplace_equip.value);
if (isNaN(LR_fireplace_equipV) || LR_fireplace_equipV == "") {
	LR_fireplace_equipV = 0;
}
var APP_tableV;
APP_tableV =parseInt(document.unitsizecalc.APP_table.value);
if (isNaN(APP_tableV) || APP_tableV == "") {
	APP_tableV = 0;
}
var MISC_patio_tableV;
MISC_patio_tableV =parseInt(document.unitsizecalc.MISC_patio_table.value);
if (isNaN(MISC_patio_tableV) || MISC_patio_tableV == "") {
	MISC_patio_tableV = 0;
}
var LR_lampV;
LR_lampV =parseInt(document.unitsizecalc.LR_lamp.value);
if (isNaN(LR_lampV) || LR_lampV == "") {
	LR_lampV = 0;
}
var APP_chairV;
APP_chairV =parseInt(document.unitsizecalc.APP_chair.value);
if (isNaN(APP_chairV) || APP_chairV == "") {
	APP_chairV = 0;
}
var MISC_patio_chairV;
MISC_patio_chairV =parseInt(document.unitsizecalc.MISC_patio_chair.value);
if (isNaN(MISC_patio_chairV) || MISC_patio_chairV == "") {
	MISC_patio_chairV = 0;
}
var LR_sofa_6ftV;
LR_sofa_6ftV =parseInt(document.unitsizecalc.LR_sofa_6ft.value);
if (isNaN(LR_sofa_6ftV) || LR_sofa_6ftV == "") {
	LR_sofa_6ftV = 0;
}
var MISC_patio_loungeV;
MISC_patio_loungeV =parseInt(document.unitsizecalc.MISC_patio_lounge.value);
if (isNaN(MISC_patio_loungeV) || MISC_patio_loungeV == "") {
	MISC_patio_loungeV = 0;
}
var LR_sofa_sectV;
LR_sofa_sectV =parseInt(document.unitsizecalc.LR_sofa_sect.value);
if (isNaN(LR_sofa_sectV) || LR_sofa_sectV == "") {
	LR_sofa_sectV = 0;
}
var MISC_piano_babyV;
MISC_piano_babyV =parseInt(document.unitsizecalc.MISC_piano_baby.value);
if (isNaN(MISC_piano_babyV) || MISC_piano_babyV == "") {
	MISC_piano_babyV = 0;
}
var LR_sofa_loveseatV;
LR_sofa_loveseatV =parseInt(document.unitsizecalc.LR_sofa_loveseat.value);
if (isNaN(LR_sofa_loveseatV) || LR_sofa_loveseatV == "") {
	LR_sofa_loveseatV = 0;
}
var BR_bed_bunkV;
BR_bed_bunkV =parseInt(document.unitsizecalc.BR_bed_bunk.value);
if (isNaN(BR_bed_bunkV) || BR_bed_bunkV == "") {
	BR_bed_bunkV = 0;
}
var MISC_piano_upriteV;
MISC_piano_upriteV =parseInt(document.unitsizecalc.MISC_piano_uprite.value);
if (isNaN(MISC_piano_upriteV) || MISC_piano_upriteV == "") {
	MISC_piano_upriteV = 0;
}
var LR_stereo_consoleV;
LR_stereo_consoleV =parseInt(document.unitsizecalc.LR_stereo_console.value);
if (isNaN(LR_stereo_consoleV) || LR_stereo_consoleV == "") {
	LR_stereo_consoleV = 0;
}
var BR_bed_doubleV;
BR_bed_doubleV =parseInt(document.unitsizecalc.BR_bed_double.value);
if (isNaN(BR_bed_doubleV) || BR_bed_doubleV == "") {
	BR_bed_doubleV = 0;
}
var MISC_rug_largeV;
MISC_rug_largeV =parseInt(document.unitsizecalc.MISC_rug_large.value);
if (isNaN(MISC_rug_largeV) || MISC_rug_largeV == "") {
	MISC_rug_largeV = 0;
}
var LR_tableV;
LR_tableV =parseInt(document.unitsizecalc.LR_table.value);
if (isNaN(LR_tableV) || LR_tableV == "") {
	LR_tableV = 0;
}
var BR_bed_singleV;
BR_bed_singleV =parseInt(document.unitsizecalc.BR_bed_single.value);
if (isNaN(BR_bed_singleV) || BR_bed_singleV == "") {
	BR_bed_singleV = 0;
}
var MISC_rug_smallV;
MISC_rug_smallV =parseInt(document.unitsizecalc.MISC_rug_small.value);
if (isNaN(MISC_rug_smallV) || MISC_rug_smallV == "") {
	MISC_rug_smallV = 0;
}
var LR_table_coffee_endV;
LR_table_coffee_endV =parseInt(document.unitsizecalc.LR_table_coffee_end.value);
if (isNaN(LR_table_coffee_endV) || LR_table_coffee_endV == "") {
	LR_table_coffee_endV = 0;
}
var BR_bed_kingV;
BR_bed_kingV =parseInt(document.unitsizecalc.BR_bed_king.value);
if (isNaN(BR_bed_kingV) || BR_bed_kingV == "") {
	BR_bed_kingV = 0;
}
var MISC_sewing_machV;
MISC_sewing_machV =parseInt(document.unitsizecalc.MISC_sewing_mach.value);
if (isNaN(MISC_sewing_machV) || MISC_sewing_machV == "") {
	MISC_sewing_machV = 0;
}
var LR_tv_table_modelV;
LR_tv_table_modelV =parseInt(document.unitsizecalc.LR_tv_table_model.value);
if (isNaN(LR_tv_table_modelV) || LR_tv_table_modelV == "") {
	LR_tv_table_modelV = 0;
}
var BR_bed_queenV;
BR_bed_queenV =parseInt(document.unitsizecalc.BR_bed_queen.value);
if (isNaN(BR_bed_queenV) || BR_bed_queenV == "") {
	BR_bed_queenV = 0;
}
var MISC_suitcaseV;
MISC_suitcaseV =parseInt(document.unitsizecalc.MISC_suitcase.value);
if (isNaN(MISC_suitcaseV) || MISC_suitcaseV == "") {
	MISC_suitcaseV = 0;
}
var LR_tv_consoleV;
LR_tv_consoleV =parseInt(document.unitsizecalc.LR_tv_console.value);
if (isNaN(LR_tv_consoleV) || LR_tv_consoleV == "") {
	LR_tv_consoleV = 0;
}
var BR_bed_foutonV;
BR_bed_foutonV =parseInt(document.unitsizecalc.BR_bed_fouton.value);
if (isNaN(BR_bed_foutonV) || BR_bed_foutonV == "") {
	BR_bed_foutonV = 0;
}
var MISC_card_tableV;
MISC_card_tableV =parseInt(document.unitsizecalc.MISC_card_table.value);
if (isNaN(MISC_card_tableV) || MISC_card_tableV == "") {
	MISC_card_tableV = 0;
}
var LR_wallunitV;
LR_wallunitV =parseInt(document.unitsizecalc.LR_wallunit.value);
if (isNaN(LR_wallunitV) || LR_wallunitV == "") {
	LR_wallunitV = 0;
}
var BR_bookshelvesV;
BR_bookshelvesV =parseInt(document.unitsizecalc.BR_bookshelves.value);
if (isNaN(BR_bookshelvesV) || BR_bookshelvesV == "") {
	BR_bookshelvesV = 0;
}
var MISC_game_tableV;
MISC_game_tableV =parseInt(document.unitsizecalc.MISC_game_table.value);
if (isNaN(MISC_game_tableV) || MISC_game_tableV == "") {
	MISC_game_tableV = 0;
}
var BR_chairV;
BR_chairV =parseInt(document.unitsizecalc.BR_chair.value);
if (isNaN(BR_chairV) || BR_chairV == "") {
	BR_chairV = 0;
}
var MISC_trunkV;
MISC_trunkV =parseInt(document.unitsizecalc.MISC_trunk.value);
if (isNaN(MISC_trunkV) || MISC_trunkV == "") {
	MISC_trunkV = 0;
}
var BR_bureauV;
BR_bureauV =parseInt(document.unitsizecalc.BR_bureau.value);
if (isNaN(BR_bureauV) || BR_bureauV == "") {
	BR_bureauV = 0;
}
var MISC_box_bookV;
MISC_box_bookV =parseInt(document.unitsizecalc.MISC_box_book.value);
if (isNaN(MISC_box_bookV) || MISC_box_bookV == "") {
	MISC_box_bookV = 0;
}
var DR_buffet_baseV;
DR_buffet_baseV =parseInt(document.unitsizecalc.DR_buffet_base.value);
if (isNaN(DR_buffet_baseV) || DR_buffet_baseV == "") {
	DR_buffet_baseV = 0;
}
var BR_chest_cedarV;
BR_chest_cedarV =parseInt(document.unitsizecalc.BR_chest_cedar.value);
if (isNaN(BR_chest_cedarV) || BR_chest_cedarV == "") {
	BR_chest_cedarV = 0;
}
var MISC_box_legalV;
MISC_box_legalV =parseInt(document.unitsizecalc.MISC_box_legal.value);
if (isNaN(MISC_box_legalV) || MISC_box_legalV == "") {
	MISC_box_legalV = 0;
}
var DR_cabinet_cornerV;
DR_cabinet_cornerV =parseInt(document.unitsizecalc.DR_cabinet_corner.value);
if (isNaN(DR_cabinet_cornerV) || DR_cabinet_cornerV == "") {
	DR_cabinet_cornerV = 0;
}
var BR_deskV;
BR_deskV =parseInt(document.unitsizecalc.BR_desk.value);
if (isNaN(BR_deskV) || BR_deskV == "") {
	BR_deskV = 0;
}
var MISC_box_allpurpV;
MISC_box_allpurpV =parseInt(document.unitsizecalc.MISC_box_allpurp.value);
if (isNaN(MISC_box_allpurpV) || MISC_box_allpurpV == "") {
	MISC_box_allpurpV = 0;
}
var APP_table_diningV;
APP_table_diningV =parseInt(document.unitsizecalc.APP_table_dining.value);
if (isNaN(APP_table_diningV) || APP_table_diningV == "") {
	APP_table_diningV = 0;
}
var BR_dresser_singleV;
BR_dresser_singleV =parseInt(document.unitsizecalc.BR_dresser_single.value);
if (isNaN(BR_dresser_singleV) || BR_dresser_singleV == "") {
	BR_dresser_singleV = 0;
}
var DR_chair_diningV;
DR_chair_diningV =parseInt(document.unitsizecalc.DR_chair_dining.value);
if (isNaN(DR_chair_diningV) || DR_chair_diningV == "") {
	DR_chair_diningV = 0;
}
var BR_dresser_doubleV;
BR_dresser_doubleV =parseInt(document.unitsizecalc.BR_dresser_double.value);
if (isNaN(BR_dresser_doubleV) || BR_dresser_doubleV == "") {
	BR_dresser_doubleV = 0;
}
var DR_serverV;
DR_serverV =parseInt(document.unitsizecalc.DR_server.value);
if (isNaN(DR_serverV) || DR_serverV == "") {
	DR_serverV = 0;
}
var BR_nightstandV;
BR_nightstandV =parseInt(document.unitsizecalc.BR_nightstand.value);
if (isNaN(BR_nightstandV) || BR_nightstandV == "") {
	BR_nightstandV = 0;
}
var BR_armoireV;
BR_armoireV =parseInt(document.unitsizecalc.BR_armoire.value);
if (isNaN(BR_armoireV) || BR_armoireV == "") {
	BR_armoireV = 0;
}
var LR_reclinerV;
LR_reclinerV =parseInt(document.unitsizecalc.LR_recliner.value);
if (isNaN(LR_reclinerV) || LR_reclinerV == "") {
	LR_reclinerV = 0;
}
var LR_ottomanV;
LR_ottomanV =parseInt(document.unitsizecalc.LR_ottoman.value);
if (isNaN(LR_ottomanV) || LR_ottomanV == "") {
	LR_ottomanV = 0;
}
var LR_chaiseloungeV;
LR_chaiseloungeV =parseInt(document.unitsizecalc.LR_chaiselounge.value);
if (isNaN(LR_chaiseloungeV) || LR_chaiseloungeV == "") {
	LR_chaiseloungeV = 0;
}
var LR_daybedV;
LR_daybedV =parseInt(document.unitsizecalc.LR_daybed.value);
if (isNaN(LR_daybedV) || LR_daybedV == "") {
	LR_daybedV = 0;
}
var LR_mediawallunitV;
LR_mediawallunitV =parseInt(document.unitsizecalc.LR_mediawallunit.value);
if (isNaN(LR_mediawallunitV) || LR_mediawallunitV == "") {
	LR_mediawallunitV = 0;
}
var LR_booklongV;
LR_booklongV =parseInt(document.unitsizecalc.LR_booklong.value);
if (isNaN(LR_booklongV) || LR_booklongV == "") {
	LR_booklongV = 0;
}
var LR_wetbarV;
LR_wetbarV =parseInt(document.unitsizecalc.LR_wetbar.value);
if (isNaN(LR_wetbarV) || LR_wetbarV == "") {
	LR_wetbarV = 0;
}
var LR_cabinetlongV;
LR_cabinetlongV =parseInt(document.unitsizecalc.LR_cabinetlong.value);
if (isNaN(LR_cabinetlongV) || LR_cabinetlongV == "") {
	LR_cabinetlongV = 0;
}
var LR_hdfivefiveV;
LR_hdfivefiveV =parseInt(document.unitsizecalc.LR_hdfivefive.value);
if (isNaN(LR_hdfivefiveV) || LR_hdfivefiveV == "") {
	LR_hdfivefiveV = 0;
}
var LR_hdthreetwoV;
LR_hdthreetwoV =parseInt(document.unitsizecalc.LR_hdthreetwo.value);
if (isNaN(LR_hdthreetwoV) || LR_hdthreetwoV == "") {
	LR_hdthreetwoV = 0;
}
var LR_officechairV;
LR_officechairV =parseInt(document.unitsizecalc.LR_officechair.value);
if (isNaN(LR_officechairV) || LR_officechairV == "") {
	LR_officechairV = 0;
}
var LR_computerstationV;
LR_computerstationV =parseInt(document.unitsizecalc.LR_computerstation.value);
if (isNaN(LR_computerstationV) || LR_computerstationV == "") {
	LR_computerstationV = 0;
}
var DR_chinalongV;
DR_chinalongV =parseInt(document.unitsizecalc.DR_chinalong.value);
if (isNaN(DR_chinalongV) || DR_chinalongV == "") {
	DR_chinalongV = 0;
}
var DR_bartableV;
DR_bartableV =parseInt(document.unitsizecalc.DR_bartable.value);
if (isNaN(DR_bartableV) || DR_bartableV == "") {
	DR_bartableV = 0;
}
var DR_barstoolV;
DR_barstoolV =parseInt(document.unitsizecalc.DR_barstool.value);
if (isNaN(DR_barstoolV) || DR_barstoolV == "") {
	DR_barstoolV = 0;
}
var DR_microstandV;
DR_microstandV =parseInt(document.unitsizecalc.DR_microstand.value);
if (isNaN(DR_microstandV) || DR_microstandV == "") {
	DR_microstandV = 0;
}
var BR_vanitydressingV;
BR_vanitydressingV =parseInt(document.unitsizecalc.BR_vanitydressing.value);
if (isNaN(BR_vanitydressingV) || BR_vanitydressingV == "") {
	BR_vanitydressingV = 0;
}
var BR_wardrobeV;
BR_wardrobeV =parseInt(document.unitsizecalc.BR_wardrobe.value);
if (isNaN(BR_wardrobeV) || BR_wardrobeV == "") {
	BR_wardrobeV = 0;
}
var BR_cribV;
BR_cribV =parseInt(document.unitsizecalc.BR_crib.value);
if (isNaN(BR_cribV) || BR_cribV == "") {
	BR_cribV = 0;
}
var MISC_dryerV;
MISC_dryerV =parseInt(document.unitsizecalc.MISC_dryer.value);
if (isNaN(MISC_dryerV) || MISC_dryerV == "") {
	MISC_dryerV = 0;
}
var MISC_barfridgeV;
MISC_barfridgeV =parseInt(document.unitsizecalc.MISC_barfridge.value);
if (isNaN(MISC_barfridgeV) || MISC_barfridgeV == "") {
	MISC_barfridgeV = 0;
}
var MISC_elecfireV;
MISC_elecfireV =parseInt(document.unitsizecalc.MISC_elecfire.value);
if (isNaN(MISC_elecfireV) || MISC_elecfireV == "") {
	MISC_elecfireV = 0;
}
var MISC_bbqV;
MISC_bbqV =parseInt(document.unitsizecalc.MISC_bbq.value);
if (isNaN(MISC_bbqV) || MISC_bbqV == "") {
	MISC_bbqV = 0;
}
var MISC_adirondackV;
MISC_adirondackV =parseInt(document.unitsizecalc.MISC_adirondack.value);
if (isNaN(MISC_adirondackV) || MISC_adirondackV == "") {
	MISC_adirondackV = 0;
}
var MISC_mowerV;
MISC_mowerV =parseInt(document.unitsizecalc.MISC_mower.value);
if (isNaN(MISC_mowerV) || MISC_mowerV == "") {
	MISC_mowerV = 0;
}
var MISC_billiardV;
MISC_billiardV =parseInt(document.unitsizecalc.MISC_billiard.value);
if (isNaN(MISC_billiardV) || MISC_billiardV == "") {
	MISC_billiardV = 0;
}
var MISC_treadmillV;
MISC_treadmillV =parseInt(document.unitsizecalc.MISC_treadmill.value);
if (isNaN(MISC_treadmillV) || MISC_treadmillV == "") {
	MISC_treadmillV = 0;
}
var MISC_boxxlV;
MISC_boxxlV =parseInt(document.unitsizecalc.MISC_boxxl.value);
if (isNaN(MISC_boxxlV) || MISC_boxxlV == "") {
	MISC_boxxlV = 0;
}
var MISC_boxlgV;
MISC_boxlgV =parseInt(document.unitsizecalc.MISC_boxlg.value);
if (isNaN(MISC_boxlgV) || MISC_boxlgV == "") {
	MISC_boxlgV = 0;
}
var MISC_storagebinV;
MISC_storagebinV =parseInt(document.unitsizecalc.MISC_storagebin.value);
if (isNaN(MISC_storagebinV) || MISC_storagebinV == "") {
	MISC_storagebinV = 0;
}

var newTot;
newTot = (APP_aircondV * 18) + 
(APP_chairV * 12) + 
(APP_dehumidV * 8) + 
(APP_dishwasherV * 30) + 
(APP_dryerV * 36) + 
(APP_freezerV * 25) + 
(APP_refridgeV * 96) + 
(APP_stoveV * 36) + 
(APP_table_diningV * 30) + 
(APP_tableV * 16) + 
(APP_vacuumV * 5) + 
(APP_washing_machV * 50) + 
(BR_armoireV * 40) +
(BR_bed_bunkV * 160) + 
(BR_bed_doubleV * 80) + 
(BR_bed_foutonV * 56) + 
(BR_bed_kingV * 450) + 
(BR_bed_queenV * 390) + 
(BR_bed_singleV * 50) + 
(BR_bookshelvesV * 5) + 
(BR_bureauV * 28) + 
(BR_chairV * 12) + 
(BR_chest_cedarV * 15) + 
(BR_deskV * 30) + 
(BR_dresser_doubleV * 38) + 
(BR_dresser_singleV * 18) + 
(BR_nightstandV * 8) + 
(BR_cribV * 28) + 
(BR_wardrobeV * 51) + 
(BR_vanitydressingV * 42) + 
(DR_buffet_baseV * 30) + 
(DR_cabinet_cornerV * 20) + 
(DR_chair_diningV * 8) + 
(DR_serverV * 15) + 
(DR_chinalongV * 13) +
(DR_bartableV * 16) +
(DR_barstoolV * 7) +
(DR_microstandV * 12) +
(LR_bookcaseV * 20) + 
(LR_bookshelvesV * 5) + 
(LR_cabinetV * 24) + 
(LR_chair_armV * 27) + 
(LR_chair_occasV * 48) + 
(LR_chair_overstuffV * 55) + 
(LR_chair_rockingV * 42) + 
(LR_chair_straightV * 5) + 
(LR_deskV * 45) + 
(LR_fireplace_equipV * 5) + 
(LR_lampV * 3) + 
(LR_sofa_6ftV * 200) + 
(LR_sofa_loveseatV * 36) + 
(LR_sofa_sectV * 68) + 
(LR_stereo_consoleV * 18) + 
(LR_table_coffee_endV * 12) + 
(LR_tableV * 16) + 
(LR_tv_consoleV * 18) + 
(LR_tv_table_modelV * 24) +  
(LR_wallunitV * 36) + 
(LR_reclinerV * 28) +
(LR_ottomanV  * 8) +
(LR_chaiseloungeV * 32) +
(LR_daybedV * 80) +
(LR_mediawallunitV * 25) +
(LR_booklongV * 52) +
(LR_wetbarV * 33) +
(LR_cabinetlongV * 35) +
(LR_hdfivefiveV * 6) +
(LR_hdthreetwoV * 2) +
(LR_officechairV * 14) +
(LR_computerstationV * 15) +
(MISC_baby_carriageV * 24) + 
(MISC_bicycleV * 25) + 
(MISC_box_allpurpV * 3) + 
(MISC_box_bookV * 2) + 
(MISC_box_legalV * 3) + 
(MISC_card_tableV * 3) + 
(MISC_deskV * 45) + 
(MISC_fanV * 7) + 
(MISC_filecab_2V * 12) + 
(MISC_filecab_4V * 24) + 
(MISC_filecab_cdbdV * 8) + 
(MISC_game_tableV * 20) + 
(MISC_golfbagV * 4) + 
(MISC_hamperV * 9) + 
(MISC_patio_chairV * 27) + 
(MISC_patio_loungeV * 35) + 
(MISC_patio_tableV * 48) + 
(MISC_piano_babyV * 75) + 
(MISC_piano_upriteV * 60) + 
(MISC_rug_largeV * 18) + 
(MISC_rug_smallV * 5) + 
(MISC_sewing_machV * 18) + 
(MISC_suitcaseV * 5) + 
(MISC_trunkV * 9) +
(MISC_boxxlV * 5) +
(MISC_boxlgV * 5) +
(MISC_storagebinV * 3) +
(MISC_treadmillV * 136) +
(MISC_billiardV * 288) +
(MISC_mowerV * 48) +
(MISC_adirondackV * 69) +
(MISC_bbqV * 26) +
(MISC_elecfireV * 39) +
(MISC_barfridgeV * 26) +
(MISC_dryerV * 53);

newTot = newTot * 1.15;
newTot = Math.round(newTot);
 document.unitsizecalc.totalfield.value = newTot;

}

function showItem(item) {
         obj=document.getElementById(item);
         obj.innerHTML="<table width='320' border='0' align='center' cellspacing='0' cellpadding='0'><tr><td></td></tr><tr><td align='center'><table width='320px' padding='6' height='auto' border='0' cellspacing='10' cellpadding='5' bgcolor='#856750'><tr><td align='center'><div style='text-align: center;'><h3 style='margin-top: 5px; margin-bottom: -5px; text-align: center;'>Estimated Unit Size: </br>" + getUnit() + "</h3></div></td></tr><tr></tr></table></td></tr></table>";
         obj.style.display="block";
}