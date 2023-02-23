% Anvitha Ramachandran
% iCons 389H - Spring 2023
% Library Heatmaps By Floor
% Created: 2/20/23

% reads in all the data for the library by floor
floors = readtable("librarydata.csv");
% formatting csv for ideal format of data to be in heatmap accurately.
data = readtable("floor1.csv");
UIFigure = uifigure('Position',[0 0 600 500]);
temp = floors(1,:);
temp = removevars(temp, "Floor");
% writes the data for the perceived temp in the formatting style
data.PerceivedTemp = table2array(temp).';
h = heatmap(UIFigure, data, 'SideOfLederle', 'SideOfPond', "ColorVariable","PerceivedTemp");
% reordered the columns so the data appears sensibly in the heatmap.
h.SourceTable.SideOfLederle = categorical(h.SourceTable.SideOfLederle);
neworder = ["Lederle", "middle", "Lederle'"];
h.SourceTable.SideOfLederle = reordercats(h.SourceTable.SideOfLederle,neworder);
h.SourceTable.SideOfPond = categorical(h.SourceTable.SideOfPond);
neworder = ["Pond", "middle", "Pond'"];
h.SourceTable.SideOfPond = reordercats(h.SourceTable.SideOfPond,neworder);
UISlider = uislider(UIFigure, 'Position',[20, 500, 200, 3]);
UISlider.Limits = [1, 21];
UISlider.ValueChangedFcn = {@UISliderValueChangedFcn, data, floors};
function UISliderValueChangedFcn(Source, ~, data, floors)
    sliderValue = round(Source.Value); % We need to round the decimal value we get from UISlider.Value to index into img
    Source.Value = sliderValue; % Change slider to rounded value to show it on UIFigure
    UIFigure = Source.Parent;
    temp = floors(sliderValue,:);
    temp = removevars(temp, "Floor");
    % writes the data for the perceived temp in the formatting style
    data.PerceivedTemp = table2array(temp).';
    h = heatmap(UIFigure, data, 'SideOfLederle', 'SideOfPond', "ColorVariable", "PerceivedTemp");
    % reordered the columns so the data appears sensibly in the heatmap.
    h.SourceTable.SideOfLederle = categorical(h.SourceTable.SideOfLederle);
    neworder = ["Lederle", "middle", "Lederle'"];
    h.SourceTable.SideOfLederle = reordercats(h.SourceTable.SideOfLederle,neworder);
    h.SourceTable.SideOfPond = categorical(h.SourceTable.SideOfPond);
    neworder = ["Pond", "middle", "Pond'"];
    h.SourceTable.SideOfPond = reordercats(h.SourceTable.SideOfPond,neworder);
end