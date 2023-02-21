data = readtable("floor1.csv")
disp(data(1,:))
fl = 1;
h = heatmap(data, 'SideOfLederle', 'SideOfPond', "ColorVariable", "PerceivedTemp");

h.SourceTable.SideOfLederle = categorical(h.SourceTable.SideOfLederle);
neworder = ["Lederle", "middle", "Lederle'"];
h.SourceTable.SideOfLederle = reordercats(h.SourceTable.SideOfLederle,neworder);

h.SourceTable.SideOfPond = categorical(h.SourceTable.SideOfPond);
neworder = ["Pond", "middle", "Pond'"];
h.SourceTable.SideOfPond = reordercats(h.SourceTable.SideOfPond,neworder);
h.title = "Qualitative Heatmap for Floor " + num2str(fl);