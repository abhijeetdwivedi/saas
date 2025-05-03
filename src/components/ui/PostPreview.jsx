import React from 'react';
import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    Repeat2,
    MessageSquareText,
    Share2,
    Check
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

function InstagramPreview() {
    return (
        <Card className="max-w-md mx-auto text-sm">
            <CardHeader className="flex flex-row items-center gap-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="" alt="profile" />
                </Avatar>
                <div>
                    <p className="font-semibold text-sm">yourusername</p>
                    <p className="text-xs text-gray-500">Texas, USA</p>
                </div>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="w-full h-72 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                    <span>Image Placeholder</span>
                </div>
                <div className="flex justify-between text-xl px-1">
                    <div className="space-x-3 flex">
                        <Heart className="w-5 h-5" />
                        <MessageCircle className="w-5 h-5" />
                        <Send className="w-5 h-5" />
                    </div>
                    <Bookmark className="w-5 h-5" />
                </div>
                <div className="text-sm px-1 space-y-1">
                    <p className="font-semibold">12 likes</p>
                    <p>
                        <span className="font-semibold">yourusername</span> Lorem Ipsum{' '}
                        <span className="text-blue-600">
                            #instacool #sunny #relax #chill
                        </span>
                    </p>
                    <p className="text-gray-500">View all 3 comments</p>
                </div>
            </CardContent>
            <CardFooter>
                <Input placeholder="Add a comment..." readOnly className="text-xs" />
            </CardFooter>
        </Card>
    );
}

function TwitterPreview() {
    return (
        <Card className="max-w-md mx-auto text-sm">
            <CardHeader className="flex flex-row items-center gap-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="" alt="profile" />
                </Avatar>
                <p className="font-semibold flex items-center gap-1">
                    Username <Check className="w-4 h-4 text-blue-500" />
                </p>
            </CardHeader>
            <CardContent className="space-y-2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...{' '}
                    <span className="text-blue-600">#LoremIpsum</span>
                </p>
                <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                    <span>Image Placeholder</span>
                </div>
                <div className="flex justify-between text-xs text-gray-600 items-center">
                    <div className="flex items-center gap-1">
                        <Repeat2 className="w-4 h-4" /> 2K
                    </div>
                    <div className="flex items-center gap-1">
                        <MessageSquareText className="w-4 h-4" /> 1.3K
                    </div>
                    <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> 45K
                    </div>
                    <Share2 className="w-4 h-4" />
                </div>
            </CardContent>
        </Card>
    );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

function PostPreview() {
  return (
    <div className="p-4">
      <Carousel className="w-full max-w-md mx-auto">
        <CarouselContent>
          <CarouselItem>
            <InstagramPreview />
          </CarouselItem>
          <CarouselItem>
            <TwitterPreview />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default PostPreview;
