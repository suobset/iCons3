% reads floor1.csv and displays the heatmap as a floor-view for one floor.

data = readtable("floor1.csv")

h = heatmap(data, 'SideOfLederle', 'SideOfPond', "ColorVariable", "PerceivedTemp");


% reordering the categories
h.SourceTable.SideOfLederle = categorical(h.SourceTable.SideOfLederle);
neworder = ["Lederle", "middle", "Lederle'"];
h.SourceTable.SideOfLederle = reordercats(h.SourceTable.SideOfLederle,neworder);

h.SourceTable.SideOfPond = categorical(h.SourceTable.SideOfPond);
neworder = ["Pond", "middle", "Pond'"];
h.SourceTable.SideOfPond = reordercats(h.SourceTable.SideOfPond,neworder);
