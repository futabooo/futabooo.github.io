import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class ProfilePage extends StatelessWidget {
  static Profile me = Profile(
    name: "futabooo",
    description: "Software Engineer",
    blogUrl: "https://futabooo.hatenablog.com/",
    imageUrl:
        "https://avatars1.githubusercontent.com/u/944185?s=460&u=9bf007c5a796046eac38c3e5ff3f77207d45f0e5&v=4",
    twitterUrl: "https://twitter.com/futabooo",
    githubUrl: "https://github.com/futabooo",
    speakerDeckUrl: "https://speakerdeck.com/futaboooo",
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: <Widget>[
            SizedBox(
              height: 40,
            ),
            Container(
              width: 200.0,
              height: 200.0,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                image: DecorationImage(
                  fit: BoxFit.fill,
                  image: NetworkImage(me.imageUrl),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              me.name,
              style: Theme.of(context).textTheme.headline4,
            ),
            SizedBox(
              height: 5,
            ),
            SizedBox(
              height: 10,
            ),
            Text(
              me.description,
              style: Theme.of(context).textTheme.subtitle1,
            ),
            SizedBox(
              height: 10,
            ),
            socialIcons(context),
          ],
        ),
      ),
    );
  }

  Widget socialIcons(context) => FittedBox(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            IconButton(
              iconSize: 40,
              icon: Icon(
                FontAwesomeIcons.rss,
                size: 32,
              ),
              onPressed: () {
                launch(me.blogUrl);
              },
            ),
            IconButton(
              iconSize: 40,
              icon: Icon(
                FontAwesomeIcons.twitter,
                size: 32,
              ),
              onPressed: () {
                launch(me.twitterUrl);
              },
            ),
            IconButton(
              iconSize: 40,
              icon: Icon(
                FontAwesomeIcons.github,
                size: 32,
              ),
              onPressed: () {
                launch(me.githubUrl);
              },
            ),
            IconButton(
              iconSize: 40,
              icon: Icon(
                FontAwesomeIcons.speakerDeck,
                size: 32,
              ),
              onPressed: () {
                launch(me.speakerDeckUrl);
              },
            ),
          ],
        ),
      );
}

class Profile {
  String name;
  String description;
  String blogUrl;
  String imageUrl;
  String twitterUrl;
  String githubUrl;
  String speakerDeckUrl;

  Profile({
    this.name,
    this.description,
    this.blogUrl,
    this.imageUrl,
    this.twitterUrl,
    this.githubUrl,
    this.speakerDeckUrl,
  });
}
