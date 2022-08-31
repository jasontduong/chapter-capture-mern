import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import { likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    return (

        <Card >
            <CardMedia image={post.selectedFile} title={post.title}>

            </CardMedia>

            <div >
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div >
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
          
            <Typography variant="h4" gutterBottom>{post.title}</Typography>
            <CardContent>
                 <Typography variant="h6" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions >
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>            
                    <FavoriteIcon fontSize="small" />
                    &nbsp;Like&nbsp;
                    {post.likeCount}
                </Button>

                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
            

        </Card>
    );

}

export default Post;