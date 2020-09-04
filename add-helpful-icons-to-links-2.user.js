// ==UserScript==
// @name Add helpful icons to links 2
// @version 0.3
// @description Add helpful icons to links
// @license CC0-1.0 License
// @homepageURL https://github.com/AndrewDaws/Add-helpful-icons-to-links-2
// @supportURL https://github.com/AndrewDaws/Add-helpful-icons-to-links-2/issues
// @namespace github.com/AndrewDaws/Add-helpful-icons-to-links-2
// @run-at document-start
// @include *
// @exclude https://www.google.*/search*
// @exclude https://www.google.*/webhp*
// @exclude https://music.google.com/*
// @exclude https://mail.google.com/*
// @exclude https://docs.google.com/*
// @exclude https://encrypted.google.com/*
// @exclude http://mxr.mozilla.org/*
// @exclude http://w3c*.github.io/*
// @compatible firefox Tampermonkey latest
// @compatible chrome Tampermonkey latest
// ==/UserScript==
(function() {var css = [
	"/*",
	"	Original: Add helpful icons to links (http://userstyles.org/styles/2245) by raezr (https://userstyles.org/users/2364)",
	"	Modified by Bluscream (https://userstyles.org/users/302445)",
	"*/",
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"",
	"/* JPG */",
	"a[href $=\".jpg\"]:not(.stylish_dontparse),a[href $=\".JPG\"]:not(.stylish_dontparse) {",
	"	background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkBJREFUeNqMU01IVFEU/u59Y29GZ3RGYooiQiMnwp9pEwRBENSiVWWKEUS1dhvUtkXtpKhIXEbUKtpFrSpaVhaGYGoTNKJgWpk6zcyb927fec+Xb7RFBw7v3HvP953fp4wxuHjv9Y+q66U9D+DRFwUxgoNSCpalvz0YPJLFmpjQUYxzt1+aORpfXGOmqQVqkTpTo/I7y7cn49/NwK0XD6MEoloOLiOvusDS22vYM9qNttEO3H0HDFMdB7h0/RlO7s/g9NHusyR5hIjEfDYm7DCjnjID6CRvqmhM8dELirC0hrM0j77OLLTqGYjdedXA6zOC1WG9nniWVpnKTxRULxrpkqDWSHKwczdODY/hxI3nOJDLwPO83roMJI4mwc22IhvGiLSb1ujHF4H+Yzn0H8/BcwPCvw0MCSQDw4eUDlISEkVDWcDcm52YVQmCykjkZ3BoR4AIRYeGjDBhBRqXL6lXPl9ByUmh7CRRriZRKlxFPTxCIKnZBG4RJdhm/QtfR1DhFCo1g3INWCyOoIZ/ZqDhsqw4QTbB8VhAlNl+AaXfv1CqrPjfVp5l5JG4YRObYQhoshGuIccF5A8PwbKHMHE+i3335+FWWKrf8mQ9QXtzHz5O7MXk2JS/tussGirWgOyCjaePu+BVq+joaqf/FN+nI4ukmunbgvTWXQFBXZcUKpe3oYWLYlin+In/hjFaHJuFdGsmksFmkfmLn/hv6AGWP72fTJn15DeD69+Ww3vlsyqVl5XH/wv/UfNBjD8CDAB2EuowTBJWOwAAAABJRU5ErkJggg==\") center right no-repeat !important;",
	"	padding: 0 18px 0 0 !important;",
	"}",
	"/* PNG */",
	"a[href $=\".png\"]:not(.stylish_dontparse),a[href $=\".PNG\"]:not(.stylish_dontparse) {",
	"	background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAABhklEQVQoUz2Rz0sVURTHP/fOD2fmNaMPfdajiBCMh2kSggQh2dJFuNN9Lfor2vpPtNKVW20ZRESu1KUopqHY4kmOi/eElJm5t3NH6cC5cO79nu/5fs9VVmJ7e4ekkYDlfyil8DxNu90my7L6TpdlSZxEaK1JApeqzjQOiAKfoijI87wGKynsz8NDdJLy5bKJpz0KGxGqv0zfu2KkyqmsotPpoF2HJ6yVP8BpKTrKA2bNR7plwWYe8qg1jDGmZq7BWrQNxppO9oc3doOX5ys8bxwxNdgliBo10IWArTCLNj/j2+8WW3aWH60Vjnse37sP8JMEc2dcW+VJYWiGhuWxiIX718yMxiyN/mLxidtQIc5uwepGVtf7oKjijMbTea7Pzyi6e/gyPpl+S29rjfDVMsPv1vHdhCDVZK/fw9A40VQFaQtrKsrdVZoTz7jSYc3suyPQhpAL2FmHhzNwkTrXBBNzcPKVfr9fg5URGfufP1HJ5ygvEMZSdLp5Vh4NbmlDY5M8fjHPP2DXiAY8Ltm8AAAAAElFTkSuQmCC\") center right no-repeat !important;",
	"	padding: 0 18px 0 0 !important;",
	"}",
	"/* GIF */",
	"a[href $=\".gif\"]:not(.stylish_dontparse),a[href $=\".GIF\"]:not(.stylish_dontparse),",
	"a[href $=\".GIFV\"]:not(.stylish_dontparse),a[href $=\".GIFV\"]:not(.stylish_dontparse) {",
	"	background: url(\"data:image/gif;base64,R0lGODlhDgALAIABAACRf////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVEMzE5OTZEOEVFMTFFMThGM0FBQjY4OTRGMTU0QjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVEMzE5OTVEOEVFMTFFMThGM0FBQjY4OTRGMTU0QjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5kaWQ6QUI5MEYwQjVFREQ4RTExMUEyQjlERUU0QTcyOEFENDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUI5MEYwQjVFREQ4RTExMUEyQjlERUU0QTcyOEFENDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFCgABACwAAAAADgALAAACGIx/AMi5DSNS0lVILVXZ7NVdXzBy4EmeBQAh+QQJCgABACwDAAAABQAIAAACC4wBFqiXyFiTK5kCACH5BAkKAAEALAAAAAAOAAsAAAIQjI+pyw3Qzos0zckurLyzAgAh+QQJCgABACwAAAAADgALAAACGYx/AMi5DZsKc7K6bISY5t+Fz+Z4JiaeQAEAIfkEBQoAAQAsAAAAAA4ACwAAAheMD3DLyQ+jc1LRCG+YymiOVZtFjuAJFAA7\") center right no-repeat !important;",
	"	padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* Audio */",
	"a[href $=\".ogg\"]:not(.stylish_dontparse),a[href $=\".OGG\"]:not(.stylish_dontparse),",
	"a[href $=\".mid\"]:not(.stylish_dontparse),a[href $=\".MID\"]:not(.stylish_dontparse),",
	"a[href $=\".midi\"]:not(.stylish_dontparse),a[href $=\".MIDI\"]:not(.stylish_dontparse),",
	"a[href $=\".mp3\"]:not(.stylish_dontparse),a[href $=\".MP3\"]:not(.stylish_dontparse),",
	"a[href $=\".wav\"]:not(.stylish_dontparse),a[href $=\".WAV\"]:not(.stylish_dontparse),",
	"a[href $=\".wma\"]:not(.stylish_dontparse),a[href $=\".WMA\"]:not(.stylish_dontparse),",
	"a[href $=\".ra\"]:not(.stylish_dontparse),a[href $=\".RA\"]:not(.stylish_dontparse),",
	"a[href $=\".m4a\"]:not(.stylish_dontparse),a[href $=\".M4A\"]:not(.stylish_dontparse),",
	"a[href $=\".ape\"]:not(.stylish_dontparse),a[href $=\".APE\"]:not(.stylish_dontparse),",
	"a[href $=\".asf\"]:not(.stylish_dontparse),a[href $=\".ASF\"]:not(.stylish_dontparse),",
	"a[href $=\".flac\"]:not(.stylish_dontparse),a[href $=\".FLAC\"]:not(.stylish_dontparse),",
	"a[href $=\".speex\"]:not(.stylish_dontparse),a[href $=\".SPEEX\"]:not(.stylish_dontparse),",
	"a[href $=\".aac\"]:not(.stylish_dontparse),a[href $=\".aac\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAMAAABVLlSxAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAA/UExURYO1/8zg/5rC/1+f/1ud/+30/63O//v9/+Xv/5S//53E/73X/4K0/0GN/+bw/3at/2aj/3+y5f///wBmzP///7yvI4wAAAAVdFJOU///////////////////////////ACvZfeoAAABeSURBVHjaYhABAkFhECkCEEAMYKYwHwczPztAADEICgoKCwlzsbDyMgIEEIOwsLCQkLCIABsnD0AAMQBZIDYTA7cAQAAhswECCFkNQAAh6wUIIGQzAQKIAckugAADAJRZBqnJZ4GSAAAAAElFTkSuQmCC\") center right no-repeat !important; padding: 0 13px 0 0 !important;",
	"}",
	"",
	"/* Video */",
	"a[href $=\".ogm\"]:not(.stylish_dontparse),a[href $=\".OGM\"]:not(.stylish_dontparse),",
	"a[href $=\".avi\"]:not(.stylish_dontparse),a[href $=\".AVI\"]:not(.stylish_dontparse),",
	"a[href $=\".mpeg\"]:not(.stylish_dontparse),a[href $=\".MPEG\"]:not(.stylish_dontparse),",
	"a[href $=\".mpg\"]:not(.stylish_dontparse),a[href $=\".MPG\"]:not(.stylish_dontparse),",
	"a[href $=\".mkv\"]:not(.stylish_dontparse),a[href $=\".MKV\"]:not(.stylish_dontparse),",
	"a[href $=\".mov\"]:not(.stylish_dontparse),a[href $=\".MOV\"]:not(.stylish_dontparse),",
	"a[href $=\".wmv\"]:not(.stylish_dontparse),a[href $=\".WMV\"]:not(.stylish_dontparse),",
	"a[href $=\".flv\"]:not(.stylish_dontparse),a[href $=\".FLV\"]:not(.stylish_dontparse),",
	"a[href $=\".rm\"]:not(.stylish_dontparse),a[href $=\".RM\"]:not(.stylish_dontparse),",
	"a[href $=\".divx\"]:not(.stylish_dontparse),a[href $=\".DIVX\"]:not(.stylish_dontparse),",
	"a[href $=\".xvid\"]:not(.stylish_dontparse),a[href $=\".XVID\"]:not(.stylish_dontparse),",
	"a[href $=\".m4v\"]:not(.stylish_dontparse),a[href $=\".M4V\"]:not(.stylish_dontparse),",
	"a[href $=\".mp4\"]:not(.stylish_dontparse),a[href $=\".MP4\"]:not(.stylish_dontparse) {	background:url(\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAASUExURczg9bLR8DOF1maj4P///wBmzL8VgU8AAABLSURBVHjaYmBmZWVkYWFkZWUGCCAGZgYmViBgYmAGCCAGhChAAIFEWYAAKAoQQEiiAAGEpBYggJBEAQIISS1AACGJAgQQklqAAAMARm0BQ7tR/e0AAAAASUVORK5CYII=\") center right no-repeat !important; padding: 0 13px 0 0 !important;",
	"}",
	"",
	"/* Documents */",
	"a[href $=\".doc\"]:not(.stylish_dontparse),a[href $=\".DOC\"]:not(.stylish_dontparse),",
	"a[href $=\".odt\"]:not(.stylish_dontparse),a[href $=\".ODT\"]:not(.stylish_dontparse),",
	"a[href $=\".rtf\"]:not(.stylish_dontparse),a[href $=\".RTF\"]:not(.stylish_dontparse),",
	"a[href $=\".docx\"]:not(.stylish_dontparse),a[href $=\".DOCX\"]:not(.stylish_dontparse),",
	"a[href $=\".xls\"]:not(.stylish_dontparse),a[href $=\".XLS\"]:not(.stylish_dontparse),",
	"a[href $=\".ods\"]:not(.stylish_dontparse),a[href $=\".ODS\"]:not(.stylish_dontparse),",
	"a[href $=\".odp\"]:not(.stylish_dontparse),a[href $=\".ODP\"]:not(.stylish_dontparse),",
	"a[href $=\".ppt\"]:not(.stylish_dontparse),a[href $=\".PPT\"]:not(.stylish_dontparse),",
	"a[href $=\".pps\"]:not(.stylish_dontparse),a[href $=\".PPS\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAKCAMAAAC+Ge+yAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAkUExURTOF1i2B1ubw/x130n+y5eHt/6XJ/8zg/2aj/////wBmzP///zvG3SgAAAAMdFJOU///////////////ABLfzs4AAABYSURBVHjaYuACAmYWbm6AAGLg4uTk5GJg4QYIIAYuVnZ2LiZGFoAAYuBi4+AAyQIEEFiEnZ2VCyCAwCIcHGxcAAEEFwEIILgIQACBtYNMAAggBi4oAAgwAGydAoHBcnzyAAAAAElFTkSuQmCC\") center right no-repeat !important; padding: 0 12px 0 0 !important;",
	"}",
	"",
	"/* PDF */",
	"a[href $=\".pdf\"]:not(.stylish_dontparse),a[href $=\".PDF\"]:not(.stylish_dontparse),",
	"a[href *=\".pdf#\"]:not(.stylish_dontparse),a[href *=\".PDF#\"]:not(.stylish_dontparse),",
	"a[href *=\".pdf?\"]:not(.stylish_dontparse),a[href *=\".PDF?\"]:not(.stylish_dontparse) {	background:url(\"data:image/gif;base64,R0lGODlhDwAPAPeOAJV6eqVXVrNEQ7lHRaV4d84+PNlSUNhUUtlUUtpfXdtgX9lhYN9jYdtqaNtradtta9xqaNxxb9h1c9l4d9x6ed96ed1+feB8eq+Af92Aft2Af4WFhYaEhIeGhoeIiIiGhomHh4yLi4+RkZKSkpubm5ycnJ2dnaKlpaWlpaampqmpqbKysra2tre3t7u7u7y8vN2CgdqKit2OjdydnN+gn9WvrtqlpN+1tN25uNy9vNy/v+KCgeSVleOlpOWmpcPDw8TExMvLy9bDw9vExNDQ0NLS0tjX19va2t3d3d7e3t7f39/f397g4N7i4t/i4uXPz+jHxurNzOHV1eHW1ubd3efc3OvU0+7Q0O/f3/Da2eDg4OHh4eHi4uLi4uPj4+Lk5OTi4uTk5Obm5ufn5+Tr6+fo6O3h4ezm5ujo6Ojp6enp6enq6urq6uvr6+zs7O3t7ezu7uzv7+7u7u/v7/Dj4/Lo6PDx8fHx8fHz8/Lx8fLy8vPy8vPz8/L09PT09PX19fb19fb29vb39/f39/j39/j4+Pj5+fn4+Pn5+fr5+fr6+vz8/P39/f7+/v///8zMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAI8ALAAAAAAPAA8AAAjzAB0tSpQIUaFBgQL9WcjI0aNFXo4cMUIkyA8gL1qs6NIw0RFCiAwWKmTIkKIiKJYw8ljIDyA+fPJgoXMoSRETehAZKXSnJ54sPHzUEVSoxJ1CRAa5eeMmDpQLGp6k4WN0UJBAbNqoKQPGAowpX/YYDfQDkJoxYsKQyXAAB5I5I+aQvZO2CxcpMhJEyOHGAxxALuaE6bLFyY0ZQxoggBCAxh8WcghraWJDwoQFDiYMqPCnRZ4tWpjoeKAgRg0hVQBY4ZMCzZ0zPQzsiELFyxolG+QAUkHiBIYCAgiI6PABBIcQehr9udPnCgMKZuzImS5HD6OAADs=\") center right no-repeat !important; padding: 0 17px 0 0 !important;",
	"}",
	"",
	"/* Mail */",
	"a[href ^=\"mailto:\"]:not(.stylish_dontparse),a[href ^=\"mailto:\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,R0lGODlhEAAQAPcAAE5OTmSh5e43IPBEL/JhT6Ojo4Kz6o298LHQ8rbT87nV873X9L7Y9MLa9cXc9cne9srf9tDj99Hj99bm+Nrp+dzq+d3q+d/s+uHt+uTu+ujx++ny++vz/O30/PD2/PL3/fX5/fn7/vz9/v7+/+0XF////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAACQALAAAAAAQABAAAAhzAEkIHEiwoMGDCBMSLMCwocOGAAQWKEGRoggQHTJUiHAgIomJFUeE8KDhAoEBHSWWCGAggEsOGCYMEJDyY8WLGSlEcLCg5kSWLg1YkPCAQQKfJUR+2HBhAoQGChD4PEC1qlWqHgsA2Mq1K1eFYMOKHVswIAA7\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* FTP */",
	"a[href ^=\"ftp://\"]:not(.stylish_dontparse),a[href ^=\"FTP://\"]:not(.stylish_dontparse),a[href ^=\"sftp://\"]:not(.stylish_dontparse),a[href ^=\"SFTP://\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,R0lGODlhEAAQAPcAAE5OTv8RkouLi4298KjN9LDR9bLT9bjW9rrX9r3Z9sDb98Pc98be98ng+Mzh+M/j+dHk+dXn+dTm+tfo+drp+tzr+t3r+t/s+uLu++Tv++Tw++bx/Ony/Oz0/O71/fD3/fL3/fT4/vb6/vj7//r8//v8//3+//7+/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAEALAAAAAAQABAAAAh2AAMIHEiwoMGDBwUoXAgAYQABKCKigNgwocSJESsWhBixhAAAIDUOhHiCRAgPA1KKFCjAxAgQHTJYkDBg5UMRHzhgoAChQU2DAjxsuDDhAYMEPzdqqBDBwQIEBpISFMCzgYIDBQhIHZmya1ebIcOGdEi2bMGAAAA7\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* IRC */",
	"a[href ^=\"irc://\"]:not(.stylish_dontparse),a[href ^=\"IRC://\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,R0lGODlhEAAQAPcAAE5OTmtra2+Xxm+Yx5EtLf8RkouLi4KjyJOty56qzYm68Iu78I298JC+8ZG/8a2z0LW30Ly80JLA8ZPA8ZbB8pjC8pvF8pzF857H86PJ86XL9KjM86rN9LDR9bLR9bfV9bnW9rvX9rzY98PDw8rE0tHH08Pc+Mfe+Mjf+M3i+M/i+dPl+tTm+tXm+trq+t3r+97r+9/t++3t7eXv/Ofx/Ojy/e31/O71/fD3/fL4/fP4/vX6/ff6/vn7/vr8/vz+//3+/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAAUALAAAAAAQABAAAAiSAAsIHEiwoMGDCGUoXKjQoAwDECNGDCBj4EMZQXrkqAFjxYkQCABULGAAow8dBEq0IADBg4YDAAQaCPJjhw0CJFIQeLDhgoOYJIHwuDHDhQoTHzhgmKAAaEkcNF4QiACCQAIKCwQAvRiDBQoRHTJUYDAAwAiLBgCoBWDAQgO1ZxGSlGB2pNy0ceUKNKu3r9+CAQEAOw==\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* Skype */",
	"a[href ^=\"skype:\"]:not(.stylish_dontparse),a[href ^=\"SKYPE:\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACfElEQVQ4jYWSa0iTURzGf+d937WbbNpaF4pJ1AqcYjQhMjITRITSoKAvZkQRFBjhh74GfYmIrhTSRUL6mBS5sAsVdoGKIAqDbkoXq1Wzllvz3fbmOX2Ym3aBHjgfzvP8/885PP+/zmQEw+VUrqxn1rxS4p8+YqWz/AcCAI/PQ3vnWSpWNBWUzGgCK5sG4PObVzy6FuFK50m+f4n/bbD7wkUqapr4H8xkjONtG7kfuTxhMH9xOXuv9v/pumSqjZBHx5SKuzGLd6bMiXLsJwe3NPHg0mUAg9nBSqQsNLsNQe/yYmr8tgInFRwbMNn5OIlCGGw70sXzBwsZicU1MqMjKEX+tATs1PhtnHltUnL+Cwt6h7k7nGVH0Mk8t5arc7j9NGzaCqDRf7uPdCqBkqAk3vGHXTq4dMWrhEVj3zeqrw8zkLDI17GobnXOIDXyAyudzgvn3o4Sy0jWB5x8aJ7B4KrpdFR5UFJNNCsJ0wPBnAEglEJIiZCSN0mLskiUtodxLgyZeG2C1rku7tT7qfbZCnViPDetMOfxDEJeg9a5LjpeJll7K8aM7vccepbAELBmjqOQFbrhwO0t0gDU4xuR/NfWBZwcCJdwOFyMS1e4dEWp2wBgKDUpA5vdQ2hZbW6RvNNKxL4bL3AW+X12jZ66mSz1O5AqF6gm4HrUpPnmJ8wxVRivOrWrRRRuVQ2NYvvRHjTNEECVz06oxI4AnsYzPPya+Wsx1Z61FeI3JtzQKDbv7cLh9v9zlSfj2f0etX9js/4bGR0c4E73aax0XNhdTqbYHViZFFKOoRv2ieZ7PepE+wayZkb8afxPuDxFlC2tZYrTS3TwCa/7n+alX5+yDKx3W/0iAAAAAElFTkSuQmCC\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* TeamSpeak 3 Server */",
	"a[href ^=\"ts3server://\"]:not(.stylish_dontparse),a[href ^=\"TS3SERVER://\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAADdUlEQVQ4jW1SW2xTBRj+z63nnN7v13Xr2VY6FheKwBSXDsZgwaiDFOeFjGhMeDExJkZe8JZgwoO3SGKMvoAxQmNgIgmXgJEwRtQt3TCQFqml3aXr1nZd7+ecnvac+sCqk/A9fX/yf/m+/4LAGnAcx5gOT28DQI5huFaSGjRJyWkMxxU8Ww7FouHxmiAI8AiwJvHt9n+K0oaRUi512dXqpAd379lCk3gmuRAfX05lNJu27nzfYnN2ZpYXgpIkiU0d2iSUyjJYr4tgYzZ9IJGmg3VE/uSB0bdOfnNqLPzd96ePGzXY2GwsEunfe/CiWmuw/y8BRckVns07vyjkMjEEoKbUO0dmJm98bXF09q4WBRrF5Xa/3/+K2aTLnw2c+mSLb38gvRg9X6tVWQwAgHF3D2iMzGvlYjaKAAi0Ut+NE7QruxQ9076hp4+r1qBU4aFve+9Wni3Fbt389VqX1/deIh4KoJ2eHt/rvr0/+2oZYCwtA4Vs8gbPllZohdaTTiXiGPZwykKJg2y+Aq+OvnG0tLp4vgGYXWu0P416rc53DvW00M/pMDCFJki1oWU4cufmuzxXWnW3OzHvRicQxMNdF0scqNQaTVf3E8/kMguXjFZmP5pdyXCxK1eAbDSgr4MBocrx6cVIQCajiL8iceDYQtFp062dGgMEQUCnNzjEGjdPK7RudHLu749PrrDJq2URThekdCz8x0eSKApVrhjW2rqOfHXisw9la0KTXgmiWIdkYmGWIGQySaqLOFvO3/shONHx493gBqHKRhuSxAIAYBhaT0Rv/7Tv+SFLNl8Bt8sMFElAcOr3e5H74Vvb+odfSibmQygAgCSJfJUr3/lPjKEqtd7DVfLXdwz5j9gtWjAbVLCUTJSPHzt6SEZScpONGckko+f+faT16OzyPlutiUbG1YpbjRpcKSdhJjg59+bh0V3zc/HpvoHhY/dD09e4SiGEPyrW6vTGjZt3nMgVWEmhULbMTE8tjZ098+31Xy5/LghCuX/whbcrfGPXg9Bv/Y8zB5yQKSi52kvIqDaSJCkEQRAAAKvN4dj38uFAT+/QJQwn9M1+pEmcbR1P0XKFbiW99Gchn0shCIDeYLS0Me5tJpvrxQpbbb09Nf5lMZe6sN4QWV+QtLLdbHVs1xvMDE4QKo5ludRy8kExl56oCfzs4xL/Azg6dhX/d2yIAAAAAElFTkSuQmCC\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* Discord */",
	"a[href*=\"discordapp.com/invite/\"]:not(.stylish_dontparse),a[href*=\"discord.gg/\"]:not(.stylish_dontparse),a[href*=\"discord.me/\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2ElEQVQ4jZ2Sv2tTURTHP/fmvRBjaKpJLRFDecW0/mggKvgL6uaSyVGxk5ubW3H3D6iLf4HQwcFdxKFgq4O0urkYsASTSFITkzTNe+ddh7y8JioS+4UD93DP/X6/55yrCBCJ2CSSpywmQLtZ80RcABRA7NhU9N6j569PzjrLkxA0qqWN9bWV2739Vl8DZJzCUjKdXRbxmCSS6eyt007hPIAFoJTWIjKJ+CGU1iGBMT6+eOHdhflpZlMxRAxKKWxLU2/22PncwJhBjTE+IwQGCQgKiyke3MlhW3pM0BOfqK3Y3KkyfAOggyzs71o+jW1puj0J1bo9wYpori/NhHWMEgwd+CIszE0D8PjpFlsfK7z/VGV1bRNjDPNnptDKR8QLHYQt+CIcj9vEYxau53O/6HDOOYFSsFJ08MRgW5rphE213v2NgIGDdkd4u10mn5tht9KhXOuitaLvCrm5PqVyk+97bUR8DGMO/KA3eLb+gUQ8yv6Bi8igSCnFm3clWu1+ONQ/tjC6xtbPw/MQP5ruWD62hfbet6+ue9AREf4R0qiVXgxzRmfQrO/WNl4+uZLKLF4NPthfUSltvzp7qfglu3Bzdejgv6GU4uKNuw8zzuX80RgCaB0B4BeL/iS1MP7G5QAAAABJRU5ErkJggg==\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* Minecraft */",
	"a[href ^=\"minecraft://\"]:not(.stylish_dontparse),a[href ^=\"MINECRAFT://\"]:not(.stylish_dontparse) {	background:url(\"data:image/png;base64,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\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}",
	"",
	"/* APT Packages */",
	"a[href^=\"apt://\"]:not(.stylish_dontparse),",
	"a[href^=\"APT://\"]:not(.stylish_dontparse), a[href*=\"apt.ubuntu.com/p/\"]:not(.stylish_dontparse) {",
	"background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAJhwAACYcBB1tCFAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKQSURBVDiNdZJNSFRRFMf/594380ZnMIaUVGosP2qisURRIaM0+kCQNllgGegiRjSoIAuFFrWIdi1EkLCohUjTqk0MQhl9CIUrIzK1TEJoSJtpcGzmzZt7Wrxx8CMPHO693Pv/nT/nHjAzNsu711pamRlDQ0PFm70RsEKkMxP9/f1Fr8f+vAkGg37NjH15EhgeX7k7e6ugBquEAKAAbDna1lPV3d0d7fL7b5pR41FLe9NAIvR1W3RBxVzOnIf3rxw/RETkFKWlKwBtVdGIx+3yhkIz9ryC3bmXe6421NXVVTudTvvIyMjtvr4+fX9988zjygsVzY0HP/8PwGcaa6tKPKdPeb1ej4qF7p2oKOlYSkALP70x5nJ5r88v6w8ikYU9bV297wOBwBoAGYbhnXg72mav3He+LF+nhcFzeR07dcSydyDnWGdtu7uoFcCzwGDPnb15YQCoX90Dnmou7m3hj7M1rnAkMTcOfXuxkds5bGbH5iBcW3T1d9Efnw4OHLBFfxyOzA+s2CZmBgB8OuL+IByyWtgBYScIDSACWMqkrdDzy1a4a0k6HMux71NLsfHJSd+L8MU1PSBNZJEEhIQllhYAnLIl52YL49PfoAwAGr9jFrb13wgIdoAAkCUkAkiStYo0DABLMAnOFM5smMkBBpgBVml0ijNnZgAMCICZYdsIMJWdhQRLQJmWnoU1YsoEOAWoFEOCFQtkbwSkyJFKMiAJAINVuomcFietJJOSoHWAiZP5TijkIMlQmmVfAGAiS2wylAEogyEgCFDONYDkYsiQuruJFMrVMvtEHD6SwgtiHQywshwBACckdMHPN8zB+njVQFpufGsZE/sA+CBQzgyfPQsvf6Z+X6ofZRMA/gHraTgzZtzKjgAAAABJRU5ErkJggg==\") center right no-repeat !important; padding: 0 18px 0 0 !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
