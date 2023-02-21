% Anvitha Ramachandran
% iCons 389H - Spring 2023
% Library Heatmaps By Floor
% Created: 2/20/23

% reads in all the data for the library by floor
floors = readtable("librarydata.csv");
% formatting csv for ideal format of data to be in heatmap accurately.
data = readtable("floor1.csv");
% select a floor to view
fl = input('What floor do you want to view? ');
temp = floors(fl,:);
temp = removevars(temp, "Floor");
% writes the data for the perceived temp in the formatting style
data.PerceivedTemp = table2array(temp).';
h = heatmap(data, 'SideOfLederle', 'SideOfPond', "ColorVariable", "PerceivedTemp");
% reordered the columns so the data appears sensibly in the heatmap.
h.SourceTable.SideOfLederle = categorical(h.SourceTable.SideOfLederle);
neworder = ["Lederle", "middle", "Lederle'"];
h.SourceTable.SideOfLederle = reordercats(h.SourceTable.SideOfLederle,neworder);
h.SourceTable.SideOfPond = categorical(h.SourceTable.SideOfPond);
neworder = ["Pond", "middle", "Pond'"];
h.SourceTable.SideOfPond = reordercats(h.SourceTable.SideOfPond,neworder);